document.addEventListener('DOMContentLoaded', () => {
  const btnNew = document.getElementById('btn-new');
  const btnLoad = document.getElementById('btn-load'); 
  const overlay = document.getElementById('videoOverlay');
  const video = document.getElementById('introVideo');
  const skip = document.getElementById('skipBtn');
  const playSound = document.getElementById('playSound');

  function fadeAndRedirect(url, delay = 450) {
    document.body.style.transition = 'opacity .45s ease';
    document.body.style.opacity = 0;
    setTimeout(() => (window.location.href = url), delay);
  }

  if (btnNew) {
    btnNew.addEventListener('click', () => {
      overlay.classList.remove('hidden');
      overlay.setAttribute('aria-hidden', 'false');

      if (video) {
        video.currentTime = 0;
        video.muted = true;
        video.play().catch(() => {
        });
      }
    });
  }

  if (video) {
    video.addEventListener('ended', () => {
      overlay.style.transition = 'opacity .5s ease';
      overlay.style.opacity = 0;
      setTimeout(() => (window.location.href = 'mapa.html'), 500);
    });
  }

  if (skip) {
    skip.addEventListener('click', () => {
      if (video) video.pause();
      overlay.style.transition = 'opacity .3s ease';
      overlay.style.opacity = 0;
      setTimeout(() => (window.location.href = 'mapa.html'), 300);
    });
  }

  if (playSound) {
    playSound.addEventListener('click', () => {
      if (!video) return;
      if (video.muted) {
        video.muted = false;
        playSound.textContent = 'Som ativado';
      } else {
        video.muted = true;
        playSound.textContent = 'Tocar som';
      }
    });
  }

  if (btnLoad) {
    btnLoad.addEventListener('click', () => {
      window.location.href = 'card-duda.html';
    });
  }
});
