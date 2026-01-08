// Sticky header and rotating text animation
document.addEventListener('DOMContentLoaded', function(){
  var header = document.getElementById('siteHeader');
  var main = document.getElementById('mainContent');
  var rotating = document.querySelector('.rotating');
  var words = rotating ? Array.from(rotating.querySelectorAll('.word')) : [];
  var cvBtn = document.getElementById('downloadCv');

  // Ensure header doesn't cover content when sticky: set top padding on main
  function adjustMainPadding(){
    if(header && main){
      main.style.paddingTop = header.getBoundingClientRect().height + 'px';
    }
  }
  adjustMainPadding();
  window.addEventListener('resize', adjustMainPadding);

  // Rotating words animation using JS timeline
  if(words.length){
    var current = 0;
    words.forEach(function(w,i){
      w.style.transition = 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out';
      w.style.opacity = '0';
      w.style.transform = 'translateY(100%)';
    });

    function showWord(index){
      words.forEach(function(w,i){
        if(i === index){
          w.style.opacity = '1';
          w.style.transform = 'translateY(0%)';
        } else {
          w.style.opacity = '0';
          w.style.transform = 'translateY(-100%)';
        }
      });
    }

    showWord(current);
    setInterval(function(){
      current = (current + 1) % words.length;
      showWord(current);
    }, 3000 + 600); // display 3s then 0.6s transition
  }

  // Sticky visual state (adds a class when scrolled)
  function onScroll(){
    if(window.scrollY > 20){
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // smooth scrolling for internal anchors
  document.documentElement.style.scrollBehavior = 'smooth';

  // CV button: default link behaviour — ensure file download attribute if present
  if(cvBtn){
    cvBtn.addEventListener('click', function(e){
      // allow default download behavior; could add analytics here
    });
  }
});
