function toggleAccordion(element) {
    const accordionItem = element.closest('.accordion-item');
    const accordionContent = accordionItem.querySelector('.accordion-content');
    
    document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.maxHeight = null;
        }
    });
    
    accordionItem.classList.toggle('active');
    
    if (accordionItem.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
        accordionContent.style.maxHeight = null;
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackdrop = document.getElementById('menuBackdrop');
    
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    menuBackdrop.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (menuOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBackdrop = document.getElementById('menuBackdrop');
    
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuBackdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// Add scrolled class to navbar when user scrolls
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.menu-content a:not(.linkedin-icon)').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

function openProjectModal(src) {
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('projectModalImg');
    modal.style.display = 'flex';
    modalImg.src = src;
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

function toggleMenu() {
    const menu = document.getElementById('menuOverlay');
    const backdrop = document.getElementById('menuBackdrop');
    const hamburger = document.getElementById('hamburger');
    
    menu.classList.toggle('active');
    backdrop.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMenu() {
    const menu = document.getElementById('menuOverlay');
    const backdrop = document.getElementById('menuBackdrop');
    const hamburger = document.getElementById('hamburger');
    
    menu.classList.remove('active');
    backdrop.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});