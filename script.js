const overlay = document.getElementById('impressumOverlay');
const openBtn = document.getElementById('openImpressum');
const closeBtn = document.getElementById('closeImpressum');

openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', function() {
  overlay.classList.remove('active');
});

// Optional: Overlay schließen, wenn man außerhalb klickt
overlay.addEventListener('click', function(e) {
  if(e.target === overlay) {
    overlay.classList.remove('active');
  }
});