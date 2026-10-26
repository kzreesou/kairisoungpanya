// Gentle fade-in as cards scroll into view
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lightbox: click a project image to see it larger
const box = document.getElementById('lightbox');
const bigImg = box.querySelector('img');
const caption = box.querySelector('p');

document.querySelectorAll('.card-img').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    bigImg.src = img.src;
    bigImg.alt = img.alt;
    caption.textContent = btn.dataset.title || '';
    box.showModal(); // Esc key closes it automatically
  });
});

// Close with the X button or by clicking outside the image
box.addEventListener('click', e => {
  if (e.target === box || e.target.closest('.close')) box.close();
});
