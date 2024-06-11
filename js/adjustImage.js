function adjustImageVisibility() {
    var pictures = document.querySelectorAll('picture');
    pictures.forEach(function(picture) {
      var images = picture.querySelectorAll('img');
      if (window.innerWidth <= 720) {

        images[0].removeAttribute('hidden');
        images[1].setAttribute('hidden', true);
      } else {
        
        images[0].setAttribute('hidden', true);
        images[1].removeAttribute('hidden');
      }
    });
  }

  adjustImageVisibility();

  window.addEventListener('resize', adjustImageVisibility);
