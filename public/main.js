// Multiple Carousels Support
document.addEventListener('DOMContentLoaded', function() {
  var containers = document.querySelectorAll('.carousel-container');
  
  for (var i = 0; i < containers.length; i++) {
    (function(container) {
      var track = container.querySelector('.carousel-track');
      var slides = container.querySelectorAll('.carousel-slide');
      var btnLeft = container.querySelector('.carousel-btn-left');
      var btnRight = container.querySelector('.carousel-btn-right');
      
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
        
        // On mobile (1 slide), use percentage for perfect centering
        if (v === 1) {
          track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
        } else {
          var w = slides[0].offsetWidth;
          var gap = 24;
          track.style.transform = 'translateX(-' + (currentIndex * (w + gap)) + 'px)';
        }
        
        btnLeft.disabled = (currentIndex === 0);
        btnRight.disabled = (currentIndex >= max);
      }
      
      btnLeft.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex--;
        update();
      });
      
      btnRight.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex++;
        update();
      });
      
      window.addEventListener('resize', update);
      update();
    })(containers[i]);
  }
});

// Toggle expandable work experience
function toggleExpand(element) {
  element.classList.toggle('expanded');
}

// Hero Carousel - Sliding Window Animation
document.addEventListener('DOMContentLoaded', function() {
  var heroTrack = document.getElementById('heroCarouselTrack');
  if (!heroTrack) return;
  
  var slides = heroTrack.querySelectorAll('.hero-carousel-slide');
  var totalSlides = slides.length;
  var currentIndex = 0;
  
  function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    return 4;
  }
  
  function updateHeroCarousel() {
    var visible = getVisibleCount();
    var slideWidth = slides[0].offsetWidth;
    
    // On mobile (1 slide), use percentage for perfect alignment
    if (visible === 1) {
      heroTrack.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    } else {
      var gap = 6;
      var offset = currentIndex * (slideWidth + gap);
      heroTrack.style.transform = 'translateX(-' + offset + 'px)';
    }
  }
  
  function nextSlide() {
    var visible = getVisibleCount();
    var maxIndex = totalSlides - visible;
    currentIndex++;
    if (currentIndex > maxIndex) {
      currentIndex = 0;
    }
    updateHeroCarousel();
  }
  
  // Auto-advance every 3 seconds
  setInterval(nextSlide, 3000);
  
  // Update on resize
  window.addEventListener('resize', function() {
    var visible = getVisibleCount();
    var maxIndex = totalSlides - visible;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;
    updateHeroCarousel();
  });
  
  updateHeroCarousel();
});
