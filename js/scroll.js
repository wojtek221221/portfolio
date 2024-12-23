document.getElementById('scroll').addEventListener('click', function () {
    const target = document.getElementById('tryby');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            target.classList.add('opacity-100');
        }, 500);
    }
});
