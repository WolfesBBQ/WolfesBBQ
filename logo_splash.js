document.addEventListener('DOMContentLoaded', function() {
  const staticLogo = document.querySelector('.header-logo-icon.home-page');
  
  // Only run animation if on the home page (static logo has home-page class)
  if (!staticLogo) return;
  
  // Create animated logo element
  const animatedLogoContainer = document.createElement('div');
  animatedLogoContainer.className = 'animated-logo';
  
  const video = document.createElement('video');
  video.src = 'logo_images/logo.webm';
  video.load();
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  
  animatedLogoContainer.appendChild(video);
  document.body.appendChild(animatedLogoContainer);
  
  // When video ends, shrink and fade animated logo, then show static logo
  video.addEventListener('ended', function() {
    // Add shrink class to move animated logo to header position
    animatedLogoContainer.classList.add('shrink');
    
    // After shrink animation completes, show static logo and remove animated logo
    setTimeout(() => {
      staticLogo.classList.add('visible');
      
      // Remove animated logo after fade out
      setTimeout(() => {
        animatedLogoContainer.remove();
      }, 800);
    }, 100);
  });
  
  // Fallback: if video fails to load or play, show static logo after 5 seconds
  setTimeout(() => {
    if (!staticLogo.classList.contains('visible')) {
      staticLogo.classList.add('visible');
      animatedLogoContainer.remove();
    }
  }, 5000);
});

// Animation by Kayla Metzger