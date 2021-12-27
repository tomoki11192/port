'use strict' 
{
  window.addEventListener('mousewheel',e =>
  {
    if (e.deltaX === 0) {
      e.stopImmediatePropagation()
      e.preventDefault()
      window.scrollBy(e.deltaY, 0)
    };
    
  });
  
 
  const slide = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg' ,'img/slide4.jpg'];
  let num = -1 ;
  function slideshow_time () {
    if (num === 3){
      num = 0;
    }
    else {
      num ++;
    }
    document.getElementById('mypic').src = slide[num];
  };

  setInterval(slideshow_time, 3000);

 
  const next = document.getElementById('first');

  next.addEventListener('click', () => {
    window.scrollTo(800,0);

  });

  const second = document.getElementById('second');
   second.addEventListener('click', () => {
     window.scrollTo(2200,0);
   });

   const top = document.getElementById('last');

   top.addEventListener('click', () => {
     scrollTo(0,0);
   });



}