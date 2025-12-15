// Logo click animation
document.addEventListener('DOMContentLoaded', function() {
  const logoIcon = document.querySelector('.header-logo-icon');
  
  if (!logoIcon) return;
  
  // Create video element for click animation
  const clickVideo = document.createElement('video');
  clickVideo.src = 'logo_images/logo.webm';
  clickVideo.muted = true;
  clickVideo.playsInline = true;
  clickVideo.preload = 'auto';

  // Absolute overlay, not layout-affecting
  clickVideo.style.position = 'absolute';
  clickVideo.style.top = '0';
  clickVideo.style.left = '0';
  clickVideo.style.width = '100%';
  clickVideo.style.height = '100%';
  clickVideo.style.objectFit = 'contain';
  clickVideo.style.opacity = '0';
  clickVideo.style.pointerEvents = 'none';

  logoIcon.appendChild(clickVideo);
  
  // Play animation on click

  logoIcon.addEventListener('click', () => {
    clickVideo.currentTime = 0;
    clickVideo.style.opacity = '1';
    clickVideo.play();
  });

  clickVideo.addEventListener('ended', () => {
    clickVideo.style.opacity = '0';
  });
});