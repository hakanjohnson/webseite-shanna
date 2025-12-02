const overlay = document.getElementById('NutzungsbedingungenOverlay');
const openBtn = document.getElementById('openNutzungsbedingungen');
const closeBtn = document.getElementById('closeNutzungsbedingungen');

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