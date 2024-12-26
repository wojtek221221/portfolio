const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu-button');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'translate-y-4');
        mobileMenu.classList.add('opacity-100', 'translate-y-0');
    }, 10);
});

function closeMenu() {
    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
    mobileMenu.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 500);
}

closeMenuButton.addEventListener('click', closeMenu);

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMenu();
    }
});