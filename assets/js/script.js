//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("#header");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//scroll sections
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      console.log(id);
      if(id=="project"||id=="contact"||id=="home"){
        document.querySelector("header").classList.remove("light-bg");
        document.querySelector("header").classList.add("dark-bg");
        document.querySelector(".active-nav").classList.remove("light-bg");
        document.querySelector(".active-nav").classList.add("dark-bg");
      }
      else{
        document.querySelector("header").classList.remove("dark-bg");
        document.querySelector("header").classList.add("light-bg");
        document.querySelector(".active-nav").classList.remove("dark-bg");
        document.querySelector(".active-nav").classList.add("light-bg");
      }

      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// emailJs
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendMail();
  });

function sendMail() {  
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
  };
  console.log(params);
  const service_id = "service_chkxvht";
  const template_id = "template_j5dai9e";

  emailjs
    .send(service_id, template_id, params)
    .then((res) => {
      document.getElementById("success").innerText =
        "Message sent successfully";
      setInterval(()=>{
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
      },1000)
      setInterval(() => {
        document.getElementById("success").innerText = "";
        
      }, 2000);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
    })
    .catch((err) => {
      alert("Something went wrong");
    });
}
//getyear
let year = new Date().getFullYear();
document.getElementById("year").innerText = year;