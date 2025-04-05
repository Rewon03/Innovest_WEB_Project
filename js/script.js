// Startup data object
const startupData = {
    'hangma-achar': {
        name: 'Hangma Achar',
        logo: 'Assets/startups/hangma achar.jpg',
        category: 'Food',
        stage: 'Seed Stage',
        funding: 'NPR 5,00,000',
        founder: 'Ejra Limbu',
        description: 'Authentic, homemade achar that preserves the rich, traditional flavors of Nepal\'s diverse local cuisines. Made with fresh, natural ingredients and crafted using time-honored recipes.',
        location: 'Kathmandu, Nepal',
        founded: '2023',
        teamSize: '5-10 employees',
        phone: '+977-1234567',
        email: 'contact@hangmaachar.com'
    },
    'bhetayo': {
        name: 'Bhetayo',
        logo: 'Assets/startups/bhetayo.jpg',
        category: 'Service Provider',
        stage: 'Series A',
        funding: 'NPR 12,00,000',
        founder: 'Rochan Man Maharjan',
        description: 'An innovative platform connecting service providers with customers, making everyday tasks easier and more efficient. From home cleaning to maintenance and repairs.',
        location: 'Kathmandu, Nepal',
        founded: '2023',
        teamSize: '10-20 employees',
        phone: '+977-1234568',
        email: 'contact@bhetayo.com'
    },
    'elite-soft': {
        name: 'EliteSoft Innovation',
        logo: 'Assets/startups/elitesoft innovation.jpg',
        category: 'Technology',
        stage: 'Pre-seed',
        funding: 'NPR 20,00,000',
        founder: 'Krish Shrestha',
        description: 'Digital solutions company specializing in social media design, SEO, video editing, web design, and app development. Creating innovative digital strategies.',
        location: 'Kathmandu, Nepal',
        founded: '2023',
        teamSize: '5-10 employees',
        phone: '+977-1234569',
        email: 'contact@elitesoft.com'
    },
    'ramro-daam': {
        name: 'Ramro Daam',
        logo: 'Assets/startups/ramrodaam.jpg',
        category: 'E-commerce',
        stage: 'Series B',
        funding: 'NPR 50,00,000',
        founder: 'Kamal Brd Thapa',
        description: 'Leading marketplace for high-quality second-hand digital goods, specializing in mobile phones, laptops, and electronics. Certified pre-owned devices.',
        location: 'Kathmandu, Nepal',
        founded: '2023',
        teamSize: '20-30 employees',
        phone: '+977-1234570',
        email: 'contact@ramrodaam.com'
    },
    'deshna': {
        name: 'Deshna Pvt.Ltd',
        logo: 'Assets/startups/deshna aachar.jpg',
        category: 'Food',
        stage: 'Series B',
        funding: 'NPR 3,00,000',
        founder: 'Sricha Magar',
        description: 'Homegrown brand producing high-quality, homemade achar while empowering skilled homemakers. Focus on natural ingredients and traditional recipes.',
        location: 'Kathmandu, Nepal',
        founded: '2023',
        teamSize: '5-10 employees',
        phone: '+977-1234571',
        email: 'contact@deshna.com'
    },
    'namaste-nepal': {
        name: 'Namaste Nepal Cleaning Service',
        logo: 'Assets/startups/namaste nepal.jpg',
        category: 'Cleanliness',
        stage: 'Growth',
        funding: 'NPR 50,00,000',
        founder: 'Surendra Karki',
        description: 'Professional cleaning and maintenance company providing eco-friendly solutions for corporate, commercial, and residential clients across Kathmandu Valley.',
        location: 'Kathmandu, Nepal',
        founded: '2023',
        teamSize: '20-30 employees',
        phone: '+977-1234572',
        email: 'contact@namastenepal.com'
    }
};

// Function to open the modal
function openStartupModal(startupId) {
    const modal = document.getElementById('startupModal');
    const startup = startupData[startupId];
    
    if (!startup) return;

    // Update modal content
    modal.querySelector('.modal-logo').src = startup.logo;
    modal.querySelector('.modal-title').textContent = startup.name;
    
    // Update badges
    const badges = modal.querySelectorAll('.modal-badge');
    badges[0].innerHTML = `<i class="fas fa-industry"></i> ${startup.category}`;
    badges[1].innerHTML = `<i class="fas fa-rocket"></i> ${startup.stage}`;
    badges[2].innerHTML = `<i class="fas fa-money-bill-wave"></i> ${startup.funding}`;
    
    // Update info grid
    const infoValues = modal.querySelectorAll('.info-value');
    infoValues[0].textContent = startup.founder;
    infoValues[1].textContent = startup.location;
    infoValues[2].textContent = startup.founded;
    infoValues[3].textContent = startup.teamSize;
    
    // Update description
    modal.querySelector('.modal-description p').textContent = startup.description;
    
    // Update contact buttons
    modal.querySelector('a[href^="tel:"]').href = `tel:${startup.phone}`;
    modal.querySelector('a[href^="mailto:"]').href = `mailto:${startup.email}`;
    
    // Show modal
    modal.style.display = 'block';
    modal.style.opacity = '1';
    modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    
    // Add body class to prevent scrolling
    document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeStartupModal() {
    const modal = document.getElementById('startupModal');
    modal.style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('startupModal');
    if (event.target === modal) {
        closeStartupModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeStartupModal();
    }
}); 