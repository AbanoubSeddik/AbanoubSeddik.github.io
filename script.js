// script.js
document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.querySelector('.yes-btn');
    const noBtn = document.querySelector('.no-btn');
    let clickCount = 0;

    // Array of messages to cycle through
    const messages = [
        "Are you sure?",
        "Fkary tany",
        "Wa l9lawi!!!",
        "Blash Bedan!!!!",
        "Wa si zbi",
        "Last chance!",
        "Last Last chance!!",
        "Last Last Last chance!!!",
        "Surely not?",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;("
    ];

    noBtn.addEventListener('click', () => {
        // Change the text inside the NO button
        noBtn.querySelector('span:nth-child(2)').textContent = messages[clickCount % messages.length];

        // Increase font size of the YES button
        clickCount++;
        const newFontSize = 1.5 + (clickCount * 0.3); // 1.5em is the initial font size
        yesBtn.style.fontSize = `${newFontSize}em`;
    });

    // Redirect to PIN page when clicking yes
    yesBtn.addEventListener('click', () => {
        window.location.href = 'pin.html';
    });
});