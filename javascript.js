document.getElementById("scrollBtn").addEventListener("click", function () {
    document.getElementById("mountains").scrollIntoView({
        behavior: "smooth"
    });
});
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});