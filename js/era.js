document.addEventListener('DOMContentLoaded', function() {
  const navi = document.getElementById('navi');
  if (navi) {
    navi.addEventListener('click', function() {
      this.classList.toggle('open');
    });
  }
});