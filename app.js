document.getElementById('myButton').addEventListener('click', () => {
    alert('Hej! Tak for dit klik.');
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Forhindrer den øjeblikkelige visning af prompten
    e.preventDefault();
    deferredPrompt = e;
    // Vis prompten når brugeren klikker på knappen
    document.getElementById('myButton').addEventListener('click', () => {
        deferredPrompt.prompt();
    });
});
