const btnNew = document.getElementById('btn-new');
const btnLoad = document.getElementById('btn-load');
const overlay = document.getElementById('videoOverlay');
const video = document.getElementById('introVideo');
const skip = document.getElementById('skipBtn');
const playSound = document.getElementById('playSound');

function fadeAndRedirect(url, delay=450){
  document.body.style.transition = 'opacity .45s ease';
  document.body.style.opacity = 0;
  setTimeout(()=> window.location.href = url, delay);
}

btnNew.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  overlay.setAttribute('aria-hidden', 'false');
 
  video.currentTime = 0;
  video.muted = true; 
  video.play().catch(()=> {
 
  });
});

video.addEventListener('ended', () => {
  overlay.style.transition = 'opacity .5s ease';
  overlay.style.opacity = 0;
  setTimeout(()=> window.location.href = 'mapa.html', 500);
});

skip.addEventListener('click', () => {
  video.pause();
  overlay.style.transition = 'opacity .3s ease';
  overlay.style.opacity = 0;
  setTimeout(()=> window.location.href = 'mapa.html', 300);
});


playSound.addEventListener('click', () => {
  if(video.muted){
    video.muted = false;
    playSound.textContent = 'Som ativado';
  } else {
    video.muted = true;
    playSound.textContent = 'Tocar som';
  }
});


btnLoad.addEventListener('click', () => {
  fadeAndRedirect('card-duda.html', 450);
});
