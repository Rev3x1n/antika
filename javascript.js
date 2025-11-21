const search = document.getElementById('search');
const reset = document.getElementById('reset');
const cards = document.querySelectorAll('.card');

function filter(q){
  q = q.toLowerCase();
  cards.forEach(card=>{
    let name = card.dataset.name;
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(q) ? "" : "none";
  });
}

search.addEventListener("input", ()=> filter(search.value));
reset.addEventListener("click", ()=>{
  search.value = "";
  filter("");
});

// READ MORE / LESS
document.addEventListener("click", e=>{
  let btn = e.target.closest("[data-toggle]");
  if(!btn) return;

  let id = btn.dataset.toggle;
  let desc = document.getElementById("desc-" + id);

  let expanded = desc.classList.toggle("expanded");
  btn.textContent = expanded ? "Sembunyikan" : "Baca selengkapnya";
});

// Shortcut tekan "/" untuk fokus search
window.addEventListener("keydown", e=>{
  if(e.key === "/" && document.activeElement.tagName !== "INPUT"){
    e.preventDefault();
    search.focus();
  }
});