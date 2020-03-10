console.log('hello world');

//project animation
let scrollDiv;
let projectDiv;
let isScrolling = null

const mq = window.matchMedia( "(max-width: 600px)" );

//smooth scroll
let navLinkProjects;

window.onload=function(){
    scrollDiv = document.querySelector('.work');
    scrollDiv.addEventListener("wheel", onScroll, false);
    projectDiv = document.querySelectorAll('.project');


}


const onScroll = (e) => {

  //if window > 600px
  if (!mq.matches) {

    if (event.deltaX > 0) {
        projectDiv.forEach( item => {
          item.classList.remove('animate-over');
          item.classList.add('animate-right');
        });

      } else {

        projectDiv.forEach( item => {
          item.classList.remove('animate-over');
          item.classList.add('animate-left');
        });
      }

    clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {

        projectDiv.forEach( item => {
          item.classList.add('animate-over');
          item.classList.remove('animate-right', 'animate-left');
        });
    }, 200);

  }

}
