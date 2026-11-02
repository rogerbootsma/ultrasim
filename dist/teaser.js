const viewer = document.querySelector('#world-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerTitle = document.querySelector('#viewer-title');
let returnFocus = null;

if (viewer && typeof viewer.showModal === 'function') {
  for (const link of document.querySelectorAll('.world-image')) {
    link.addEventListener('click', event => {
      event.preventDefault();
      returnFocus = link;
      viewerTitle.textContent = link.dataset.worldTitle;
      viewerImage.src = link.href;
      viewerImage.alt = link.querySelector('img').alt;
      viewer.showModal();
    });
  }
  document.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => returnFocus?.focus());
}

// The waitlist is a design preview until a subscription service is connected.
document.querySelector('#waitlist-form')?.addEventListener('submit', event => event.preventDefault());
