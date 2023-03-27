gapi.load('client:auth2', {
    callback: function () {
        gapi.client.init({
            apiKey: 'AIzaSyCWrA7kF1aFOQcv2IMOIUmOn0V-BRrezEI',
            clientId: '715016485637-h3ma7706pmmdd92eahn6dtngcjrbi2ec.apps.googleusercontent.com',
            scope: 'email profile openid'
        }).then(function () {
            // Get the Google sign-in button element
            const googleSignInButton = document.getElementById('google-signin-button');

            // Add an event listener to the sign-in button
            googleSignInButton.addEventListener('click', function () {
                // Prompt the user to sign in with their Google account
                gapi.auth2.getAuthInstance().signIn().then(function () {
                    // Redirect the user to the same page with a sign-out button
                    window.location.href = 'RealEstate.html?signed_in=true';
                });
            });
        });
    },
    onerror: function () {
        console.error('Failed to load Google API client');
    },
    timeout: 5000, // 5 seconds
    ontimeout: function () {
        console.error('Google API client took too long to load');
    }
});

// When your HTML file loads, check if the user is signed in and show the appropriate button
window.onload = function () {
    const signedIn = new URLSearchParams(window.location.search).get('signed_in');
    if (signedIn) {
        const navbar = document.getElementById('navbar');
        navbar.innerHTML = `
        <ul>
          <li><a href="#">Home</a></li>
          <li><button id="google-signout-button">Sign out</button></li>
        </ul>
      `;
        const googleSignOutButton = document.getElementById('google-signout-button');
        googleSignOutButton.addEventListener('click', function () {
            // Sign the user out of their Google account
            gapi.auth2.getAuthInstance().signOut().then(function () {
                // Redirect the user to the same page without a sign-out button
                window.location.href = 'RealEstate.html';
            });
        });
    }
};


