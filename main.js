const contactForm = document.querySelector("#form");
const submitBtn = document.querySelector(".button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const addressInput = document.querySelector("#address");




const publicKey = "E93ocs3x1ZqY5lA1O";
const serviceID = "service_8p4r7ln";
const templateID ="template_vsj7lsj";


emailjs.init("publicKey");
    
contactForm.addEventListener("button", e => {
  e.preventDefault();

  button.innerText = "Just A Moment...";

  const field = {
    name: nameInput.value,
    email: emailInput.value,
    number: numberInput.value,
    address: addressInput.value,
  }

  emailjs.send(serviceID, templateID, field)
  .then(() => {
    button.innerText = "sent successfully";
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    addressInput.value = "";
  }, (error) => {

    console.log(error);
    button.innerText = "Something went wrong";
  });

 });
  
   