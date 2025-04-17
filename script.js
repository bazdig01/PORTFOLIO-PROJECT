function Homee() {
    document.querySelector(".right-side").style.display="block";
    document.querySelector(".Aboutt").style.display="none";
    document.querySelector(".Projectss").style.display="none";
    document.querySelector(".Skillss").style.display="none";
    document.querySelector(".Contactt").style.display="none";
}

function Aboutt(){
    document.querySelector(".right-side").style.display="none";
    document.querySelector(".Aboutt").style.display="block";
    document.querySelector(".Projectss").style.display="none";
    document.querySelector(".Skillss").style.display="none";
    document.querySelector(".Contactt").style.display="none";
}

function Projectss(){
    document.querySelector(".right-side").style.display="none";
    document.querySelector(".Aboutt").style.display="none";
    document.querySelector(".Projectss").style.display="flexColumn";

    document.querySelector(".Skillss").style.display="none";
    document.querySelector(".Contactt").style.display="none";
}
function Skillss(){
    document.querySelector(".right-side").style.display="none";
    document.querySelector(".Aboutt").style.display="none";
    document.querySelector(".Projectss").style.display="none";
    document.querySelector(".Skillss").style.display="block";
    document.querySelector(".Contactt").style.display="none";
}
function Contactt(){
    document.querySelector(".right-side").style.display="none";
    document.querySelector(".Aboutt").style.display="none";
    document.querySelector(".Projectss").style.display="none";
    document.querySelector(".Skillss").style.display="none";
    document.querySelector(".Contactt").style.display="block";
}


function slideNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); 
    
}
