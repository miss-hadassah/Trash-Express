function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      number: document.getElementById("number").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,

    };

  const serviceID = "service_8p4r7ln";
  const templateID = "template_vsj7lsj";


  emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
      alert("Your message sent succesfully");
    })
    .catch();
 }