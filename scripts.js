// Sticky header using Intersection Observer and main padding adjustment
document.addEventListener('DOMContentLoaded', function(){
  var header = document.getElementById('siteHeader');
  var main = document.getElementById('mainContent');
  var sentinel = document.getElementById('headerSentinel');

  function adjustMainPadding(){
    if(header && main){
      main.style.paddingTop = window.getComputedStyle(header).getPropertyValue('height');
    }
  }
  adjustMainPadding();
  window.addEventListener('resize', adjustMainPadding);

  if(window.IntersectionObserver && sentinel){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting){
          header.classList.add('is-sticky');
        } else {
          header.classList.remove('is-sticky');
        }
      });
    }, {threshold:0});
    io.observe(sentinel);
  } else {
    // fallback
    window.addEventListener('scroll', function(){
      if(window.scrollY > 10) header.classList.add('is-sticky'); else header.classList.remove('is-sticky');
    });
  }

  // smooth scrolling for internal anchors
  document.documentElement.style.scrollBehavior = 'smooth';
});
