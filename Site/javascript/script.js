window.addEventListener('load', () => {
    //---------------------------------------------------------------


//----------------------------------------------------------------
const openDocs = document.querySelector('.openDocs');
const openPro = document.querySelector('.procure');
const closes = document.querySelector('.close');
const proDocs = document.querySelector('.proDocs');

openDocs.addEventListener('click', show);
closes.addEventListener('click', close);

function show(){
  openPro.style.display = "block";
}

function close(){
  openPro.style.display = "none";
}

proDocs.addEventListener("click", () => {
  alert("We will follow up with procurement paperwork.");
});

const sections = document.querySelectorAll(".hidden");
    window.addEventListener("scroll", () => {
        const trigger = window.innerHeight * 0.8;
        sections.forEach(section => {
            section.classList.toggle(
                "show",
                section.getBoundingClientRect().top < trigger
            );
        });
    });
});
