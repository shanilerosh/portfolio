const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("list");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  Email.send({
    SecureToken: "081bfe55-a4eb-4e50-bded-8c46b9bd8b32",
    To: "shanilmiranda24@gmail.com",
    From: "shanilmiranda24@gmail.com",
    Subject: `${name} wants to get in touch 🙋`,
    Body: `Please get in touch with <strong>${name}</strong>, contact number - ${contact}, email address - ${email}`,
  }).then((message) => {
    if (message === "OK") {
      swal(
        "We Received your detail. Thank You",
        "You are important to us.We'll contact you ASAP. 😊",
        "success"
      );
    } else {
      swal("Error ⚠", "Please try again with valid details");
    }
  });
});
