console.log('hello cruel world');
let navContainer = false;
let main = false;
let header = false;
// const mq = window.matchMedia('(max-width: 767px)');

// const navToggler = () => {
//   const scrollY = main.scrollTop;
//   // if window < 600
//   if (scrollY >= window.innerHeight) {
//     // hide nav on scroll
//     header.classList.add('nav--hide');
//   }
//   if (scrollY <= window.innerHeight / 2) {
//     // hide nav on scroll
//     header.classList.remove('nav--hide');
//   }
// };

window.onload = function () {
  //nav scroll
  header = document.querySelector('.header');
  navContainer = document.getElementById('nav');
  // Get all buttons with class="btn" inside the container
  const navLinks = navContainer.getElementsByClassName('nav__link');
  // Loop through the links and add the active class to the current/clicked button
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      let current = document.getElementsByClassName('nav__link--active');

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(' nav__link--active', '');
      }

      // Add the active class to the current/clicked button
      this.className += ' nav__link--active';

      $('body').toggleClass('nav-active');
    });
  } //for nav active

  // main = document.querySelector('.scroll-container');
  // if (main.scrollTop >= window.innerHeight) {
  //   // hide nav on scroll
  //   header.classList.add('nav--hide');
  // }
  // main.onscroll = function () {
  //   navToggler();
  // };

  // header.addEventListener('click', () => {
  //   if (header.className.split(' ').includes('nav--hide')) {
  //     header.classList.remove('nav--hide');
  //   }
  // });

  // idea 1
  $('.corner').click(() => {
    $('body').toggleClass('nav-active');
    $('.corner-blob').toggle();
    $('.corner-circle').toggle();
  });
  // idea 2
  // $('.corner').click(() => {
  //   $('body').toggleClass('nav-active');
  // });

  var randomness = 200;
  var threshold = 100;
  var anim_duration = 700; //1000 = 1s

  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgb && rgb.length === 4
      ? '#' +
          ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
          ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
          ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : '';
  }

  animate = function () {
    var randomNumRed = Math.round(Math.random() * 25) + 25;
    var randomNumGreen = Math.round(Math.random() * 25) + 125;

    $('.corner-blob').animate(
      {
        borderTopLeftRadius: String(Math.round(Math.random() * randomness + threshold) + 'px'),
        borderTopRightRadius: String(Math.round(Math.random() * randomness + threshold) + 'px'),
        borderBottomLeftRadius: String(Math.round(Math.random() * randomness + threshold) + 'px'),
        borderBottomRightRadius: String(Math.round(Math.random() * randomness + threshold) + 'px'),
        backgroundColor: rgb2hex('rgba(' + randomNumRed + ',' + randomNumGreen + ', 215)')
      },
      anim_duration,
      animate
    );
  };
  animate();
};
