// Simple interactions: print and theme toggle
document.addEventListener('DOMContentLoaded', function(){
  var printBtn = document.getElementById('printBtn');
  var themeToggle = document.getElementById('themeToggle');

  if(printBtn){
    printBtn.addEventListener('click', function(){
      window.print();
    });
  }

  function setTheme(dark){
    if(dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('cv-dark', dark ? '1' : '0');
  }

  // initialize
  var pref = localStorage.getItem('cv-dark');
  setTheme(pref === '1');

  if(themeToggle){
    themeToggle.addEventListener('click', function(){
      var dark = !document.documentElement.classList.contains('dark');
      setTheme(dark);
    });
  }
});
