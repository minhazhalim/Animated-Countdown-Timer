const counter = document.querySelectorAll('.counter');
const speed = 1000;
counter.forEach(counters => {
     const updateCount = () => {
          const target = +counters.getAttribute('data-target');
          const count = +counters.innerText;
          const inc = target / speed;
          if(count<target){
               counters.innerText = count + inc;
               setTimeout(updateCount,1);
          }else{
               counters.innerText = target;
          }
     };
     updateCount();
});