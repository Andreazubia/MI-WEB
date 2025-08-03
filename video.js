function openVideo(url) {
        const overlay = document.getElementById('videoOverlay');
        const videoFrame = document.getElementById('videoFrame');
        
        videoFrame.src = url;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function closeVideo() {
        const overlay = document.getElementById('videoOverlay');
        const videoFrame = document.getElementById('videoFrame');
        
        videoFrame.src = '';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function playLocalVideo(container, videoPath) {
    container.innerHTML = `
        <video width="100%" height="100%" autoplay controls>
            <source src="${videoPath}" type="video/mp4">
            Tu navegador no soporta la reproducción de videos.
        </video>
    `;
    }

    // Close overlay when clicking outside video
    document.getElementById('videoOverlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeVideo();
        }
    });
