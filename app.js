document.addEventListener("DOMContentLoaded", function() {
    const fonts = ['Marvel-Regular' ,'US Angel', 'Old English Five', 'ARB 85 Poster Script', 'Cloister Black' , 'Power Rangers'];
    const letters = document.querySelectorAll('.para');

    function changeFonts() {
        letters.forEach(letter => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            letter.style.fontFamily = randomFont;
        });
    }

    setInterval(changeFonts, 400); // Change fonts every 0.4 seconds
});
