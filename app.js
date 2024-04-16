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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  