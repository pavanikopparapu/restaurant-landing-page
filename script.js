function showPage(pageId) {
  const pages = [
    'homePage',
    'loginPage',
    'menuPage',
    'bookingPage',
    'contactPage',
    'aboutPage',
    'blogPage'
  ];
  pages.forEach((id) => {
    document.getElementById(id).style.display = id === pageId ? 'block' : 'none';
  });
}

function submitBooking(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();
  const date = form.querySelector('input[type="date"]').value;
  const time = form.querySelector('input[type="time"]').value;

  alert(`Thank you, ${name}! Your table has been booked for ${date} at ${time}. We will contact you at ${email} or ${phone} if needed.`);
  form.reset();
  showPage('homePage');
}

function toggleSelection(item) {
  item.classList.toggle('selected');
}

function submitOrder() {
  alert('Order submitted successfully!');
  showPage('homePage');
}

// Show home page by default on load
window.onload = () => showPage('homePage');
