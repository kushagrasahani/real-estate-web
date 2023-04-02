
let name = document.getElementById('name');
let emailIs = document.getElementById('email').value;
let phone = document.getElementById('phone');
let sub = document.getElementsByClassName('form-contact')[0];
let text = "";
let nameR = "";
let sc = 0;
function btnclick() {
    let x = document.getElementById("frm1");

    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + " ";
    }

    console.log(text);
    console.log(text.length);
    for (let i = 0; i < text.length; i++) {

        console.log(sc);
        if (sc == 2) {
            nameR += text.substring(0, i - 1);
            break;
        }
        if (text[i].match(/^\s*$/)) {
            sc++;
            console.log(sc);
        }
    }
    console.log(nameR);
    // console.log(emailR)
}

sub.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("clicked");
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sahanikushagra@gmail.com",
        Password: "F0BD96692F38FB1DCC54192D5FAC3D86D6EE",
        To: 'sahanikushagra@gmail.com',
        From: 'sahanikushagra@gmail.com',
        Subject: `Details Of ${nameR} `,
        Body: `Details entered are: ${text}`
    }).then(
        message => alert(message)
    );

})
