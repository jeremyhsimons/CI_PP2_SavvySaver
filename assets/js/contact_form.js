//Code from EmailJS and Code With Voran. Links to resources used in readme.

let btn = document.getElementById('contact-submit');
btn.addEventListener('submit', sendMail);

function sendMail(event) {
   event.preventDefault;
   btn.innerHTML = "Sending";
   btn.style.backgroundColor = "#A4C3BF";
   const serviceID = 'service_pggv7y7';
   const templateID = 'template_5frzz6d';
   const templateParams = {
    from_name : document.getElementById('full-name').value,
    email_id : document.getElementById('email').value,
    message : document.getElementById('message').value
   };
   emailjs.init('d9-fGM2Z78DfQCMYa');
   emailjs.send(serviceID, templateID, templateParams).then((res) => {
      alert('Your message was sent successfully.');
      btn.innerHTML = "Send";
      btn.style.backgroundColor = "#EBEECD";
      document.getElementById('full-name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      console.log(res);
   })
   .catch((err) => console.log(err));
}

