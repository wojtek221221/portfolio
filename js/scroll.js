document.getElementById('scroll').addEventListener('click', function() {
    document.getElementById('portfolio').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});