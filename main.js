const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const numberInput = document.querySelector("#user-number");
const addressInput = document.querySelector("#user_email");



const publicKey = "E93ocs3x1ZqY5lA1O";
const serviceID = "service_8p4r7ln";
const templateID ="template_vsj7lsj";


emailjs.init("publicKey");
    
contactForm.addEventListener("submit", e => {
  e.preventDefault();

  submitBtn.innerText = "Just A Moment...";

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    number: numberInput.value,
    address: addressInput.value,
  }

  emailjs.send(serviceID, templateID, inputFields)
  .then(() => {
    submitBtn.innerText = "sent successfully";
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    addressInput.value = "";
  }, (error) => {

    console.log(error);
    submitBtn.innerText = "Something went wrong";
  });

 });
  
   