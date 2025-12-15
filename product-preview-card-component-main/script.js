(function () {
  const container = document.querySelector('.js-container');

  const imageDiv = document.querySelector('.js-image-div');

  const mobileContainer = 40 * 16;


  function condition() {
    if (window.innerWidth <= mobileContainer) {
  container.classList.add('border-container-mobile');
  imageDiv.classList.add('border-image-mobile');

  container.classList.remove('border-container-desktop');
  imageDiv.classList.remove('border-image-desktop');

  } else{
  container.classList.remove('border-container-mobile');
  imageDiv.classList.remove('border-image-mobile');

  container.classList.add('border-container-desktop');
  imageDiv.classList.add('border-image-desktop');
  }
}

condition();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(() => {
      condition();
    }, 120)
  });
}
) ();