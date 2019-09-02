const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.getElementsByTagName("nav");


for (let i = 0; i < 6; i++){
  nav[0].children[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  nav[0].children[i].classList.add("green"); 
}

let cta = document.querySelector(".cta-text");

cta.children[0].innerHTML= siteContent.cta.h1.split(" ").join("<br/>");
cta.children[1].textContent = siteContent.cta.button;

let cta_img = document.getElementById("cta-img");
cta_img.src = siteContent.cta["img-src"];

let topContent = document.querySelector(".top-content");
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];

topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelector(".bottom-content");
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];

bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];

bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact");
for(let i = 0; i < 4; i++){
  contact.children[i].textContent = siteContent["contact"][Object.keys(siteContent["contact"])[i]];
}

let footer = document.getElementsByTagName("footer");
footer[0].children[0].textContent = siteContent["footer"]["copyright"];

let nav1 = document.createElement("a");
let nav2 = document.createElement("a");
nav1.textContent = "item 1";
nav2.textContent = "item 2";

nav[0].appendChild(nav1);
nav[0].prepend(nav2);