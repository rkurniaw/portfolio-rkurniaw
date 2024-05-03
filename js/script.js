/*================== toggle icon navbar ==================*/
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

dropdown.onclick = () => {
  dropdownContent.classList.toggle("active");
};

/*================== dark mode toggle ==================*/
const darkToggle = document.getElementById("dark-toggle");
const html = document.querySelector("html");
const image = document.getElementsByTagName("img")[0];

// darkToggle.onclick = function () {
//   document.body.classList.toggle("dark-theme");
//   if (document.body.classList.contains("dark-theme")) {
//     image.src = "assets/dark_logo.png";
//     localStorage.theme = "dark";
//   } else {
//     image.src = "assets/light_logo.png";
//     localStorage.theme = "light";
//   }
// };

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    image.src = "assets/dark_logo.png";
    html.classList.add("dark-theme");
    localStorage.theme = "dark";
  } else {
    image.src = "assets/light_logo.png";
    html.classList.remove("dark-theme");
    localStorage.theme = "light";
  }
});

/*================== switch toggle mode as mode ==================*/
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

/*================== typed js ==================*/
const typed = new Typed(".multiple-text", {
  strings: ["Programmer", "YouTuber", "Gamer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*================== switch tablink about section ==================*/
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/*================== scroll section active link ==================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========== sticky navbar ========== */
  let header = document.querySelector(".header");
  let toTop = document.querySelector("#to-top");

  header.classList.toggle("sticky", window.scrollY > 0);
  toTop.classList.toggle("hidden", window.scrollY <= 0);

  /*========== remove menu icon navbar when click navbar link (scroll) ========== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
  dropdownContent.classList.remove("active");
};

/*========== swiper ========== */
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*========== scroll reveal ========== */
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".header, .services h1, .portfolio h1, .heading ", {
  origin: "top",
});

ScrollReveal().reveal(
  ".services-box, .portfolio-box, .contact form, .certification-container",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".info-side, .about-photo", {
  origin: "left",
});

ScrollReveal().reveal(".photo-side, .about-me", {
  origin: "right",
});

/*========== validation input form ========== */
const items = document.querySelectorAll(".item");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
// const mess = document.getElementById($("#summernote").summernote);

function checkInput() {
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    btnCloseAW.addEventListener("click", function () {
      alertWarning.classList.add("hide");
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    });

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

/*========== validation check email ========== */
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzjbJoM3aTQZbiYkN4kA8TDAazBZc6kSMah4jtaw5zmWDB_qTYuyJuLo3T4y7ohbnhKyQ/exec";
const form = document.forms["portfolio-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const alertSucces = document.querySelector(".alert-succes");
const alertWarning = document.querySelector(".alert-warning");
const btnCloseAS = document.querySelector(".btn-close-as");
const btnCloseAW = document.querySelector(".btn-close-aw");

//function cek email
function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-text.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

//function submit
function sendEmail() {
  const bodyMessage = `Full Name ${fullName.value}<br> Email: ${email.value} Phone Number: ${phone.value}<br> Message: ${message.value}`;

  //send to gmai
  Email.send({
    SecureToken: "3ae4fee6-3c61-4d39-8282-8a96fe91ade3",
    To: "rkurniaw7@gmail.com",
    From: "rkurniaw7@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if ((message = "OK")) {
      //show alert succes
      alertSucces.classList.toggle("hide");
      Swal.fire({
        title: "Succes!",
        text: "Your message sent successfully!",
        icon: "success",
      });
    }
  });

  //send to google shet
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //show send button, hide loading button
      btnSend.classList.toggle("hide");
      btnLoading.classList.toggle("hide");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));

  //event submit button on click
  //show loading button, hide send button
  btnSend.classList.toggle("hide");
  btnLoading.classList.toggle("hide");
}

//close button alert
btnCloseAS.addEventListener("click", function () {
  alertSucces.classList.add("hide");
});

/*========== send email to goole sheet after all requirements complete========== */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendEmail();
    alertWarning.classList.add("hide");
  } else {
    alertWarning.classList.remove("hide");
    return false;
  }
});
