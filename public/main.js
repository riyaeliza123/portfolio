// Carousel
window.onload = function() {
  var track = document.querySelector('.carousel-track');
  var slides = document.querySelectorAll('.carousel-slide');
  var btnLeft = document.querySelector('.carousel-btn-left');
  var btnRight = document.querySelector('.carousel-btn-right');
  if (!track || !slides.length || !btnLeft || !btnRight) return;
  var currentIndex = 0;
  function getVisible() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }
  function update() {
    var v = getVisible();
    var max = slides.length - v;
    if (max < 0) max = 0;
    if (currentIndex > max) currentIndex = max;
    if (currentIndex < 0) currentIndex = 0;
    var w = slides[0].offsetWidth;
    track.style.transform = 'translateX(-' + (currentIndex * (w + 24)) + 'px)';
    btnLeft.disabled = (currentIndex === 0);
    btnRight.disabled = (currentIndex >= max);
  }
  btnLeft.onclick = function() { currentIndex--; update(); };
  btnRight.onclick = function() { currentIndex++; update(); };
  window.onresize = update;
  update();
};
