/* 
  script.js
  
  This script handles:
  - Hiding the loading animation on page load.
  - Navbar hide/show based on scroll direction.
  - Form submission and validation (including numeric check for investment breakdown).
  - Saving submissions to localStorage.
  - Dynamically generating startup cards and showing detailed view.
*/

// Loading Animation
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
});

// Navigation Bar Hide/Show on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
  
  if (scrollDirection === 'down' && scrollTop > 100) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop = scrollTop;
});

// Form Validation and Submission
const startupForm = document.getElementById('startupForm');
const startupContainer = document.querySelector('.startup-container');

// Load existing startups from localStorage
let startups = JSON.parse(localStorage.getItem('startups')) || [];

// Display existing startups
function displayStartups() {
  startupContainer.innerHTML = '';
  startups.forEach((startup, index) => {
    const card = createStartupCard(startup, index);
    startupContainer.appendChild(card);
  });
}

// Create startup card
function createStartupCard(startup, index) {
  const card = document.createElement('div');
  card.className = 'startup-card';
  
  card.innerHTML = `
    <img src="${startup.photo}" alt="${startup.title}">
    <div class="card-content">
      <h3>${startup.title}</h3>
      <p>${startup.description.substring(0, 100)}...</p>
      <p>Investment Required: $${startup.investment}</p>
      <a href="#startupDetails" class="learn-more-btn" data-index="${index}">Learn More</a>
    </div>
  `;
  
  return card;
}

// Handle form submission
startupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Validate investment breakdown fields
  const investmentFields = ['manufacturing', 'advertising', 'production', 'management', 'shipping'];
  let isValid = true;
  
  investmentFields.forEach(field => {
    const value = document.getElementById(field).value;
    if (isNaN(value) || value < 0) {
      isValid = false;
      alert(`${field.charAt(0).toUpperCase() + field.slice(1)} must be a positive number`);
    }
  });
  
  if (!isValid) return;
  
  // Get form data
  const formData = new FormData(startupForm);
  const startup = {
    title: formData.get('title'),
    description: formData.get('description'),
    investment: formData.get('investment'),
    photo: URL.createObjectURL(formData.get('photo')),
    manufacturing: formData.get('manufacturing'),
    advertising: formData.get('advertising'),
    production: formData.get('production'),
    management: formData.get('management'),
    shipping: formData.get('shipping'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    whatsapp: formData.get('whatsapp')
  };
  
  // Add to startups array and save to localStorage
  startups.push(startup);
  localStorage.setItem('startups', JSON.stringify(startups));
  
  // Reset form and display updated startups
  startupForm.reset();
  displayStartups();
  
  // Scroll to startups section
  document.getElementById('startups').scrollIntoView({ behavior: 'smooth' });
});

// Handle startup details view
const startupDetails = document.getElementById('startupDetails');
const backToStartups = document.getElementById('backToStartups');
const detailContent = document.getElementById('detailContent');

startupContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('learn-more-btn')) {
    const index = e.target.dataset.index;
    const startup = startups[index];
    
    detailContent.innerHTML = `
      <div class="details-container">
        <img src="${startup.photo}" alt="${startup.title}" class="details-image">
        <div class="details-content">
          <h2>${startup.title}</h2>
          <p>${startup.description}</p>
          <p>Investment Required: $${startup.investment}</p>
          
          <h3>Investment Breakdown</h3>
          <table class="investment-table">
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Manufacturing</td>
              <td>$${startup.manufacturing}</td>
            </tr>
            <tr>
              <td>Advertising</td>
              <td>$${startup.advertising}</td>
            </tr>
            <tr>
              <td>Production</td>
              <td>$${startup.production}</td>
            </tr>
            <tr>
              <td>Management</td>
              <td>$${startup.management}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>$${startup.shipping}</td>
            </tr>
          </table>
          
          <h3>Contact Details</h3>
          <p>Name: ${startup.name}</p>
          <p>Email: <a href="mailto:${startup.email}?subject=Innovest%20-%20${startup.title}">${startup.email}</a></p>
          <p>Phone: ${startup.phone}</p>
          <p>WhatsApp: ${startup.whatsapp}</p>
        </div>
      </div>
    `;
    
    startupDetails.classList.remove('hidden');
  }
});

backToStartups.addEventListener('click', () => {
  startupDetails.classList.add('hidden');
});

// Initial display of startups
displayStartups();
  