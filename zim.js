const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;
function flip(flipCard,newNumber){
     const topHalf = flipCard.querySelector('.top');
     const startNumber = parseInt(topHalf.textContent);
     if(newNumber === startNumber) return;
     const bottomHalf = flipCard.querySelector('.bottom');
     const div1 = document.createElement('div');
     div1.classList.add('top-flip');
     const div2 = document.createElement('div');
     div2.classList.add('bottom-flip');
     topHalf.textContent = startNumber;
     bottomHalf.textContent = startNumber;
     div1.textContent = startNumber;
     div2.textContent = newNumber;
     div1.addEventListener('animationstart',event => {
          topHalf.textContent = newNumber;
     });
     div1.addEventListener('animationend',event => {
          div1.remove();
     });
     div2.addEventListener('animationend',event => {
          bottomHalf.textContent = newNumber;
          div2.remove();
     });
     flipCard.append(div1,div2);
}
function flipAllCards(time){
     const hours = Math.floor(time / 3600);
     const minutes = Math.floor(time / 60) % 60;
     const seconds = time % 60;
     flip(document.querySelector('[data-hours-tens]'),Math.floor(hours / 10));
     flip(document.querySelector('[data-hours-ones]'),hours % 10);
     flip(document.querySelector('[data-minutes-tens]'),Math.floor(minutes / 10));
     flip(document.querySelector('[data-minutes-ones]'),minutes % 10);
     flip(document.querySelector('[data-seconds-tens]'),Math.floor(seconds / 10));
     flip(document.querySelector('[data-seconds-ones]'),seconds % 10);
}
setInterval(() => {
     const currentDate = new Date();
     const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
     flipAllCards(timeBetweenDates);
     previousTimeBetweenDates = timeBetweenDates;
},250);