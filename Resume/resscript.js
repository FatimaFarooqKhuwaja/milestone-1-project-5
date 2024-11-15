"use strict";
let myname = localStorage.getItem("name");
window.addEventListener("load", () => {
    let mypic = localStorage.getItem("pic");
    let mydesignation = localStorage.getItem("designation");
    let myphone = localStorage.getItem("phone");
    let myemail = localStorage.getItem("email");
    let myaddress = localStorage.getItem("address");
    let myskills = localStorage.getItem("skills");
    let myskills2 = localStorage.getItem("skills2");
    let myskills3 = localStorage.getItem("skills3");
    let myeducation = localStorage.getItem("education");
    let myexperience = localStorage.getItem("experience");
    let mylanguage1 = localStorage.getItem("language1");
    let mylanguage2 = localStorage.getItem("language2");
    let mylanguage3 = localStorage.getItem("language3");
    let myabout = localStorage.getItem("about");
    let resname = document.getElementById("resName");
    resname.textContent = myname;
    let respic = document.getElementById("respic");
    respic.src = mypic;
    let resdesignation = document.getElementById("resdesignation");
    resdesignation.textContent = mydesignation;
    let resphone = document.getElementById("resphone");
    resphone.textContent = myphone;
    let resemail = document.getElementById("resemail");
    resemail.textContent = myemail;
    let resaddress = document.getElementById("resaddress");
    resaddress.textContent = myaddress;
    let resskills = document.getElementById("resskills");
    resskills.textContent = myskills;
    let resskills2 = document.getElementById("resskills2");
    resskills2.textContent = myskills2;
    let resskills3 = document.getElementById("resskills3");
    resskills3.textContent = myskills3;
    let reseducation = document.getElementById("reseducation");
    reseducation.textContent = myeducation;
    let resexperience = document.getElementById("resexperience");
    resexperience.textContent = myexperience;
    let reslanguage1 = document.getElementById("reslanguage1");
    reslanguage1.textContent = mylanguage1;
    let reslanguage2 = document.getElementById("reslanguage2");
    reslanguage2.textContent = mylanguage2;
    let reslanguage3 = document.getElementById("reslanguage3");
    reslanguage3.textContent = mylanguage3;
    let resabout = document.getElementById("resabout");
    resabout.textContent = myabout;
});
// edit button
let resedit = document.getElementById("resedit");
resedit?.addEventListener("click", () => {
    window.history.back();
});
//end
// shareable button
let resshare = document.getElementById("resshare");
let anc = document.getElementById("anc");
myname.toLowerCase().replace(/\s+/g, "-");
let baseUrl = "http://127.0.0.1:5500/Resume/resume.html";
let uniqueUrl = `${baseUrl}?/${myname}`;
resshare?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqueUrl);
});
// end
//copy shareable link button
let copybtn = document.getElementById("copybtn");
copybtn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Link copied to clipboard");
    });
});
