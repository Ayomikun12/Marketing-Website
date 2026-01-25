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


// const heroSections = document.querySelectorAll(".hero-animate");
// const scrollSections = document.querySelectorAll(".scroll-animate");

// // 🔹 HERO → animate on refresh
// window.addEventListener("load", () => {
//   heroSections.forEach(section => {
//     section.classList.add("show");
//   });
// });

// // 🔹 OTHERS → animate on scroll
// window.addEventListener("scroll", () => {
//   const trigger = window.innerHeight * 0.8;

//   scrollSections.forEach(section => {
//     if (section.getBoundingClientRect().top < trigger) {
//       section.classList.add("show");
//     }
//   });
// });


const sections = document.querySelectorAll(".hidden");

function revealSections() {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(section => {
    section.classList.add("show");
  });
}

// Run when page loads / refreshes
window.addEventListener("load", revealSections);

sections.forEach((section, index) => {
  setTimeout(() => {
    section.classList.add("show");
  }, index * 150);
});

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
