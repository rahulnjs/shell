(function () {
  if (location.pathname === '/') {
    document.body.style.visibility = 'hidden';
    //document.querySelector('button').click();
  } else {
    shell_window();
  }



  function shell_window() {
    console.log('hello');
  }
})();
