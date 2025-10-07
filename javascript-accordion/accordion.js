function openAccordion(target) {
    console.log(`OPEN! Helloooo from ${target}`);
    const sections = document.getElementsByClassName("accordion-section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    const section = document.getElementById(target);
    section.style.display = "block";
}