document.getElementById('ip_copy').addEventListener('click', async () => {
    const ip = "cubepixel.pl";
    try {
        await navigator.clipboard.writeText(ip);

        const notification = document.getElementById('notification');
        notification.classList.remove('hidden');
        notification.classList.add('block');

        setTimeout(() => {
            notification.classList.remove('block');
            notification.classList.add('hidden');
        }, 3000);
    } catch (err) {
        console.error('Błąd podczas kopiowania IP:', err);
    }
});