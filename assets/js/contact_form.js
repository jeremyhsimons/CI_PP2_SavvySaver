//Code from EmailJS. Link to original in readme. 

let btn = document.getElementById('contact-submit');
btn.addEventListener('click', sendMail);

function sendMail() {
   btn.innerHTML = "Sending"
   const serviceID = 'service_pggv7y7';
   const templateID = 'template_5frzz6d';
   const templateParams = {
    from_name : document.getElementById('full-name').value,
    email_id : document.getElementById('email').value,
    message : document.getElementById('message').value
   }

   emailjs.send(serviceID, templateID, templateParams).then((res) => {
      alert('Your message was sent successfully.');
      btn.innerHTML = "Send"
      document.getElementById('full-name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      console.log(res);
   })
   .catch((err) => console.log(err));
}

