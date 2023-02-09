function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
// $('.next').click(function() {
//     owl.trigger('next.owl.carousel');
// })

// $('.previous').click(function() {
//     owl.trigger('prev.owl.carousel', [300]);
// })

  
burgerMenu('.burger-menu');


$(".owl-carousel").owlCarousel({
 margin: 10,
 loop: true,
 nav: true,
 dots: false,
 responsive: {
  0: {
   items: 1,
  },
  600: {
   items: 2,
  },
  1000: {
   items: 3,
  },
 },
});




  