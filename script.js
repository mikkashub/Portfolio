function showPage(id) {
  window.scrollTo({ top: 0, behavior: 'instant' });  // ← move this FIRST
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
}

  function sendEmail() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!firstName || !email || !message) {
    alert('Please fill out all required fields.');
    return;
  }

  const templateParams = {
    from_name: firstName + ' ' + lastName,
    from_email: email,
    message: message
  };

  emailjs.send('service_kbz9oxq', 'template_1', templateParams)
    .then(() => {
      alert('Message sent! I\'ll get back to you soon.');
      // Clear the form
      document.getElementById('first-name').value = '';
      document.getElementById('last-name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch(() => {
      alert('Something went wrong. Please try emailing me directly at mikka.robinos@gmail.com');
    });
}

function openOverlay(src) {
  const overlay = document.getElementById('img-overlay');
  document.getElementById('overlay-img').src = src;
  overlay.style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('img-overlay').style.display = 'none';
}