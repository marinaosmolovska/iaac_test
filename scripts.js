// Sticky header using Intersection Observer and main padding adjustment
document.addEventListener('DOMContentLoaded', function(){
  var header = document.getElementById('siteHeader');

  function setBodyTopPadding(){
    if(header){
      var h = header.getBoundingClientRect().height;
      document.body.style.paddingTop = Math.ceil(h) + 'px';
    }
  }
  setBodyTopPadding();
  window.addEventListener('resize', setBodyTopPadding);

  // smooth scrolling for internal anchors
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Toggle scrolled class when user scrolls more than 100px
  function handleScroll(){
    if(!header) return;
    if(window.scrollY > 100){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, {passive:true});
  handleScroll();
});
