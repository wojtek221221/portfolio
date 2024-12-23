document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('opacity-100', 'translate-y-0');
        menu.classList.remove('opacity-0', '-translate-y-8');
    } else {
        menu.classList.add('opacity-0', '-translate-y-8');
        menu.classList.remove('opacity-100', 'translate-y-0');
        
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 500);
    }
});
