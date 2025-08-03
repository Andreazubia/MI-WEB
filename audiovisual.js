document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.portfolio-container');
  const items = document.querySelectorAll('.portfolio-item');
  const dots = document.querySelectorAll('.flex.justify-center.gap-2 button');
  const prevBtn = document.querySelector('button.transform.-translate-x-4');
  const nextBtn = document.querySelector('button.transform.translate-x-4');

  let currentIndex = 0;

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('bg-purple-500', index === currentIndex);
      dot.classList.toggle('bg-gray-600', index !== currentIndex);
    });
  }

  function scrollToItem(index) {
    currentIndex = index;
    const item = items[index];
    container.scrollTo({
      left: item.offsetLeft - container.offsetLeft,
      behavior: 'smooth',
    });
    updateDots();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => scrollToItem(index));
  });

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      scrollToItem(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = Math.min(items.length - 1, currentIndex + 1);
      scrollToItem(currentIndex);
    });
  }

  updateDots();

  document.querySelectorAll('.video-container').forEach(container => {
    container.addEventListener('mouseenter', () => {
      const video = container.querySelector('video');
      if (video) video.play();
    });

    container.addEventListener('mouseleave', () => {
      const video = container.querySelector('video');
      if (video) video.pause();
    });
  });
});
