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

  

  // function callback(entries, obs) {
  //   entries.forEach(entry => {
  //     if (!entry.isIntersecting) {
  //       return;
  //     }

  //     entry.target.classList.add('appear');
  //     obs.unobserve(entry.target);
      
  //   });
  // }

  // const options = {
  //   threshold: 0.8
  // };

  // const observer = new IntersectionObserver (callback, options);

  // const targets = document.querySelectorAll('.main_colum');

  // targets.forEach(target => {
  //   observer.observe(target);
  // });


}