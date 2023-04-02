console.log("hello");
let body = document.querySelector("body");
let menu = document.querySelector(".menubutton");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let last = document.querySelector(".lastone");
let overlay = document.querySelector(".overlay");
let background = document.querySelector(".background");
let wholebar = document.querySelector(".wholebar");
let mobile = document.querySelector(".mobile");
let hr = document.getElementsByTagName("hr");
let crossbutton = document.querySelector(".crossbutton");
let fillOverlay = document.querySelector(".fill-overlay");
let fill = document.querySelector(".fill");
let filter = document.querySelector(".filter");
let search = document.querySelector('#red');
let search2 = document.querySelector("#tewn");
let head = document.querySelector(".head");
let borderless1 = document.querySelector(".borderless1");
let borderless2 = document.querySelector(".borderless2");
let borderless3 = document.querySelector(".borderless3");
let borderless4 = document.querySelector(".borderless4");
let borderless5 = document.querySelector(".borderless5");
let place = document.querySelector("#placeholder");
let dflex = document.querySelector(".d-flex");
let appoint = document.querySelector(".appoint");
let hola = document.querySelector(".hola");
let callingUs = document.querySelector(".callingUs");
let calling = document.querySelector("#calling");
let back = document.querySelector(".back");
let days = document.querySelector(".days");
let confirmed = document.querySelector(".confirmed");
let front = document.querySelector("#front");
let dateButton = document.querySelector("#dateButton");
let bookOverlay = document.querySelector(".book-overlay");
let book = document.querySelector("#booking");
let official = document.querySelector(".official");
let cross2 = document.querySelector(".cross2");
let cancel = document.querySelector(".cancel");
let okay = document.querySelector(".ok");
let currDate = document.querySelector(".currDate");
let close = document.querySelector(".close");
crossbutton.addEventListener('click', crossfun);
function crossfun(e) {
    head.classList.remove("remove-head");
    search.classList.remove("remove-search");
    fill.classList.remove("filtering");
    fillOverlay.classList.remove("overlay-fill");
    search2.classList.remove("remove-search");
    body.classList.toggle("stop-scrolling");

}
borderless1.addEventListener('click', change);
borderless2.addEventListener('click', change);
borderless3.addEventListener('click', change);
function change(e) {
    filter.classList.remove("remove");
    search.classList.remove("remove");

}
borderless4.addEventListener('click', change1);
borderless5.addEventListener('click', change2);
function change1(e) {
    filter.classList.add("remove");
    search.classList.add("remove");
    dflex.classList.add("increase");

}
function change2(e) {
    filter.classList.add("remove");
    search.classList.add("remove");
    dflex.classList.add("increase");
}
menu.addEventListener('click', fun);
function fun(e) {
    let num = 0;
    if (num % 2 == 0) {
        console.log("heloo again");
        menu.classList.toggle('open');
    }
    else {
        menu.classList.remove('open');
    }
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle("stop-scrolling");
    background.classList.toggle("back-menu");
    wholebar.classList.toggle("add");
    mobile.classList.toggle("mobile-come");
    hr.classList.toggle("come");
}

filter.addEventListener('click', fun2);
function fun2(e) {
    console.log("helloooo");
    fillOverlay.classList.toggle('overlay-fill');
    fill.classList.toggle("filtering");
    head.classList.toggle("remove-head");
    body.classList.add("stop-scrolling");
    // search.classList.toggle("remove-search");
    search2.classList.toggle("remove-search");
};
let mid = document.querySelector(".middle");
// mid.style.backgroundImage = `url(https://images-cdn.listingloop.com.au/images/Real-Estate-QLD-Best-Suburbs-for-a-Growing-Family.jpg)`;
const imgArr = ["https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2020/02/03121357/capi_46bd85def170a7dd6d3b0c57fa068127_e41219c3b1a3ba745b024376fb12a2d9.jpeg", "https://res.akamaized.net/domain/image/upload/t_web/v1645404980/9_Emo_Road_Malvern_East_facade_echpsq.jpg", "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/web_lrg-6a0669359ad482b10475.webp", "https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2019/12/26100120/capi_3ec579742973d0eaf9cd1cfd9f226d70_26f020098e8ad7c315d4065cf36c58cc.jpeg", "https://media.istockphoto.com/id/174767378/photo/suburban-family-home.jpg?s=612x612&w=0&k=20&c=hOvdqYCArfwp2NoUaaebneoBTdrz4eGQmfvDXfw2AIk="];
// let count = 0;
let randomImageUrl;
// function setBackground() {
//     // const arr = [];
//     // while (arr.length < quan) {
//     var rI = Math.floor(Math.random() * imgArr.length);
//     // if (arr.indexOf(rI) === -1) {
//     randomImageUrl = imgArr[rI];
//     mid.style.backgroundImage = `url(${randomImageUrl})`;
//     // arr.push(rI);
//     // }
//     // }
// }
//suggestion box start
let suggestion = [
    "Adelaide - Greater Region", "Armidale - Greater Region", "Albany",
    "Brisbane - Greater Region", "Brisbane - Southern Region", "Bayside",
    "Canberra", "Central Queensland", "Cairns - Greater Region",
    "Drawin", "Devon Port", "Eastern Melbourne", "East Coast", "Eastern Adelaide",
    "Frankston", "Fitzroy", "Gold Coast", "Gladstone", "Gippsland West",
    "Hobart", "Hurstville", "Inner East Melbourne", "Ipswich", "Jimboomba", "Junee",
    "Kimberley", "Knox City", "Liverpool", "Limestone Coast", "Melbourne - Northern Region", "Melbourne City - Greater Region",
    "North Coast", "North East Perth", "Perth", "Port Stephens", "Quandong", "Quambatook", "Queensferry",
    "Raglan", "Ravenhall", "Ravenswood",
    "San Remo", "Samaria", "Taabinga", "Tabilk", "Table Top", "Uarbry", "Ucarty West", "Valdora", "Vale View",
    "Wabonga", "Waanyarra"
]
const searchWrapper = document.querySelector(".search-input");
const inputbox = searchWrapper.querySelector("input");
const suggbox = searchWrapper.querySelector(".autocom-box");

inputbox.onkeyup = (e) => {
    let userData = e.target.value;
    let empArr = [];
    if (userData) {
        empArr = suggestion.filter((d) => {
            return d.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        empArr = empArr.map((d) => {
            return d = '<li>' + d + '</li>'
        })
        console.log(empArr);
        searchWrapper.classList.add("active");
        showSuggestion(empArr);
        let allList = suggbox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    else {
        searchWrapper.classList.remove("active");
    }
}
function select(ele) {
    let selectData = ele.textContent;
    // console.log(selectData);
    inputbox.value = selectData;
}

function showSuggestion(l) {
    let listData;
    if (!l.length) {
        userValue = inputbox.value;
        listData = '<li' + userValue + '</li>'
    }
    else {
        listData = l.join('');
    }
    suggbox.innerHTML = listData;
}
//suggestion box end-----
//make a call and calendar code begins---

appoint.addEventListener('click', funct);
function funct(e) {
    hola.classList.toggle("appointment");
}
callingUs.addEventListener("click", function () {
    calling.classList.toggle("remove");
    // body.classList.add("stop-scrolling");
});

function toggleButton() {
}
let arr3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let dates = new Date();
let currYear = dates.getFullYear();
let currMonth = dates.getMonth();
function rendercalender() {
    let firstDay = new Date(currYear, currMonth, 1).getDay();
    // console.log(firstDay);
    let lastDate = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDate).getDay();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDay; i > 0; i--) {
        liTag += `<li><button class="inactive works">${lastDateOfLastMonth - i + 1}</button></li>`;
    }
    for (let i = 1; i <= lastDate; i++) {
        liTag += ` <li>
    <button class="works" >${i}</button></li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li><button class="inactive works">${i - lastDayOfMonth + 1}</button></li>`;
    }
    currDate.innerHTML = `${arr3[currMonth]} ${currYear}`;
    // console.log(lastDate);
    days.innerHTML = liTag;
}
rendercalender();

back.addEventListener('click', perform);
function perform() {
    if (currMonth < 11) {
        currMonth++;
        currDate.innerHTML = `${arr3[currMonth]} ${currYear}`;
        rendercalender();

    }
    else if (currMonth >= 12) {
        currMonth = 0;
        currYear++;
        currDate.innerHTML = `${arr3[currMonth]} ${currYear}`;
        rendercalender();
    }
}

function confirmedBooked() {
    confirmed.textContent = `${currYear} ${currMonth}`;
}

front.addEventListener('click', function () {
    if (currMonth <= 0) {
        currMonth = 11;
        currYear--;
        currDate.innerHTML = `${arr3[currMonth]} ${currYear}`;
        rendercalender();

    }
    else if (currMonth > 0) {
        currMonth--;
        currDate.innerHTML = `${arr3[currMonth]} ${currYear}`;
        rendercalender();
    }
})

dateButton.addEventListener("click", function10);
function function10() {
    bookOverlay.classList.toggle(".overlay-book");
    // body.classList.add("stop-scrolling");
    book.classList.toggle("remove");
    official.textContent = currDate.innerHTML;
}


cross2.addEventListener("click", function () {
    console.log("cross clicked");
    book.classList.toggle("remove");
})

cancel.addEventListener("click", function () {
    book.classList.toggle("remove");
})


okay.addEventListener("click", function () {
    book.classList.toggle("remove");
    alert("You data is successfully submitted");
}
)
close.addEventListener("click", function () {
    calling.classList.toggle("remove");
})
///make a call and calendar code ends---

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// fade in  and slide in animation
const fader = document.querySelectorAll(".fade-in");
const slider = document.querySelectorAll(".slide-in");
const fades = document.querySelectorAll(".fade-in1");

const options = {
    threshold: 1,
    // rootMargin: "0px 0px -50px 0px"

};
const opt = {
    threshold: 0,
    // rootMargin: "0px 0px -50px 0px"
}
const appearOn = new IntersectionObserver(function (entries, appearOn) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOn.unobserve(entry.target);
        }
    })
}, options);
const changeOn = new IntersectionObserver(function (entries, changeOn) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            changeOn.unobserve(entry.target);
        }
    })
}, opt);
fader.forEach(f => {
    appearOn.observe(f);
})
fades.forEach(l => {
    appearOn.observe(l);
})
slider.forEach(s => {
    changeOn.observe(s);
})
const hidenLines = document.querySelectorAll(".hideThem");
const changeText = document.getElementById('btnClick');
function showThem() {
    for (let i = 0; i < hidenLines.length; i++) {
        hidenLines[i].style.opacity = 1;
    }
    changeText.innerText = 'Show Less';
    changeText.classList.remove("necheLeja");
    changeText.classList.add("uparLeja");
    changeText.onclick = hideText;
}
function hideText() {
    for (let i = 0; i < hidenLines.length; i++) {
        hidenLines[i].style.opacity = 0;
    }
    changeText.innerText = 'Show More';
    changeText.classList.remove("uparLeja");
    changeText.classList.add("necheLeja");
    changeText.onclick = showThem;
}
//loader code begins
let loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    loader.classList.add("preloader--hidden")
})
let load2 = document.querySelector(".logo")
load2.addEventListener("click", () => {
    window.addEventListener("load", () => {
        loader.classList.add("preloader--hidden")
    })
    window.location.reload(true);
})
