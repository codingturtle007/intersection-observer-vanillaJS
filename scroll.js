const cards = document.querySelectorAll('.card');

document.addEventListener('scroll', e => {
  cards.forEach(card => {
    if(card.getBoundingClientRect().top < window.innerHeight) {
      // your logic comes here
    }
  })
});