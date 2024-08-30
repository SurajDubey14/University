let hambtn = document.getElementById("hamburger");
let element = document.querySelector(".right-nav");

hambtn.addEventListener("click", () => {
  element.classList.toggle("clickedHam");
});

// Contact Data
let Blogname = document.getElementById("Blog-name");
let Blogemail = document.getElementById("Blog-email");
let BlogComment = document.getElementById("Blog-message");

let blogname;
let blogemail;
let blogmessage;

const blogName = () => {
  blogname = Blogname.value;
  console.log(blogname);
};
const blogEmail = () => {
  blogemail = Blogemail.value;
  console.log(blogemail);
};
const blogComment = () => {
  blogmessage = BlogComment.value;
  console.log(blogmessage);
};
// handleBlogSubmit
const handleBlogSubmit = () => {
  const sendBlogData = {
    blogname,
    blogemail,
    blogmessage,
  };
  console.log(sendBlogData);

  fetch("https://nexgen-c8a3e-default-rtdb.firebaseio.com/Blog/.json", {
    method: "POST",
    body: JSON.stringify(sendBlogData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Thank you");
    });
};

let Contactname = document.getElementById("Contact-name");
let Contactemail = document.getElementById("Contact-email");
let Contactsubject = document.getElementById("Contact-subject");
let ContactComent = document.getElementById("Contact-message");

let contactName;
let contactEmail;
let contactSubject;
let contactMessage;
const ContactName = () => {
  contactName = Contactname.value;
};
const ContactEmail = () => {
  contactEmail = Contactemail.value;
};
const ContactMessage = () => {
  contactMessage = ContactComent.value;
};
const ContactSubject = () => {
  contactSubject = Contactsubject.value;
};
const handleContactSubmit = () => {
  const sendContactData = {
    contactName,
    contactEmail,
    contactSubject,
    contactMessage,
  };
  // console.log(sendContactData);

  fetch("https://nexgen-c8a3e-default-rtdb.firebaseio.com/Contact.json", {
    method: "POST",
    body: JSON.stringify(sendContactData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Thank you");
    });
};
