function toggleAccordion(element) {
    const accordionItem = element.closest('.accordion-item');
    const accordionContent = accordionItem.querySelector('.accordion-content');
    
    // Close all other accordions
    document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.maxHeight = null;
        }
    });
    
    // Toggle current accordion
    accordionItem.classList.toggle('active');
    
    if (accordionItem.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
        accordionContent.style.maxHeight = null;
    }
}

// Sticky navigation on scroll
window.addEventListener('scroll', function() {
    const stickyNav = document.querySelector('.sticky-nav');
    const header = document.querySelector('.header');
    
    if (header) {
        const headerHeight = header.offsetHeight;
        
        if (window.scrollY > headerHeight - 100) {
            stickyNav.classList.add('show');
        } else {
            stickyNav.classList.remove('show');
        }
    }
});
