//Code from EmailJS. Link to original in readme. 

const btn = document.getElementById('contact-submit');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_pggv7y7';
   const templateID = 'template_5frzz6d';
   const templateParams = {
    from_name : document.getElementById('full-name').value,
    email_id : document.getElementById('email').value,
    message : document.getElementById('message').value
   }

   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'd9-fGM2Z78DfQCMYa')
   .then(function() {
      console.log('SUCCESS!');
   }, function() {
      console.log('FAILED...');
   });
});
