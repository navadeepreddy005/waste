// Example of loadPage function
function loadPage(page) {
    // Hide all sections first
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the corresponding page
    if (page === 'Home') {
        document.querySelector('.home-banner').style.display = 'block';
    } else if (page === 'schedule') {
        document.querySelector('.schedule-section').style.display = 'block';
    } else if (page === 'dashboard') {
        document.querySelector('.dashboard-section').style.display = 'block';
    } else if (page === 'admin') {
        document.querySelector('.admin-section').style.display = 'block';
    } else if (page === 'login') {
        document.querySelector('.login-section').style.display = 'block';
    } else if (page === 'register') {
        document.querySelector('.register-section').style.display = 'block';
    }
}