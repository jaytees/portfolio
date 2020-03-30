//project animation
let scrollDiv;
let projectDiv;
let isScrolling = null;

const mq = window.matchMedia( "(max-width: 600px)" );

window.onload=function(){
    //project scroll
    scrollDiv = document.querySelector('.work');
    scrollDiv.addEventListener("wheel", onScroll, false);
    projectDiv = document.querySelectorAll('.project');

    //nav scroll
    const navContainer = document.getElementById('nav');
    // Get all buttons with class="btn" inside the container
    const navLinks = navContainer.getElementsByClassName("nav__link");
    // Loop through the links and add the active class to the current/clicked button
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("nav__link--active");

        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" nav__link--active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " nav__link--active";
      });
    }//for nav active


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
