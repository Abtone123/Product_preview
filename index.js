let card_btn = document.querySelector('.card_text button');

console.log(card_btn);

card_btn.addEventListener('mouseover', () => {
    card_btn.style.backgroundColor = 'hsl(212, 21%, 14%)';
} )

card_btn.addEventListener('mouseout', () => {
    card_btn.style.backgroundColor = 'hsl(158, 36%, 37%)';
} )