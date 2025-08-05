document.addEventListener('DOMContentLoaded', function () {
  // Horizontal videos
  const videoItems = document.querySelectorAll('.video-item');
  const videoPlayer = document.getElementById('videoPlayer');
  const playerIframe = document.getElementById('playerIframe');
  const closePlayer = document.getElementById('closePlayer');

  videoItems.forEach(item => {
    item.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video-id');
      playerIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      videoPlayer.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closePlayer.addEventListener('click', function () {
    playerIframe.src = '';
    videoPlayer.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  videoPlayer.addEventListener('click', function (e) {
    if (e.target === videoPlayer) {
      playerIframe.src = '';
      videoPlayer.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Reels con iframe de YouTube
  const reelContainers = document.querySelectorAll('.reel-player-container[data-video-id]');
  reelContainers.forEach(container => {
    const thumbnail = container.querySelector('.video-thumbnail');
    const iframe = container.querySelector('.reel-iframe');

    if (thumbnail && iframe) {
      thumbnail.addEventListener('click', function () {
        const videoId = container.getAttribute('data-video-id');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        container.classList.add('playing');
      });
    }
  });

  // Reels con videos locales y botón
  const localReels = document.querySelectorAll('.reel-player-container:not([data-video-id])');

  localReels.forEach(container => {
    const video = container.querySelector('video');
    const button = container.querySelector('.play-btn');

    if (!video || !button) return;

    function updateState() {
      if (video.paused) {
        container.classList.remove('playing');
        button.textContent = '▶️';
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
      } else {
        container.classList.add('playing');
        button.textContent = '⏸️';
        button.style.opacity = '0';
        button.style.pointerEvents = 'none';
      }
    }

    button.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      updateState();
    });

    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      updateState();
    });

    video.addEventListener('play', updateState);
    video.addEventListener('pause', updateState);

    updateState(); // Estado inicial
  });
});
