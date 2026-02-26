// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            const offsetTop = target.offsetTop - document.querySelector('.navbar').offsetHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});
