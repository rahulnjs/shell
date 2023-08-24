(function () {
  if (location.pathname === '/') {
    document.body.style.visibility = 'hidden';

  } else {
    shell_window();
  }



  function shell_window() {
    console.log('hello');
  }
})();
