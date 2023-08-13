const sections = document.querySelectorAll('section')
// console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid black';
    section.style.padding = '20px';
    section.style.marginTop = '14px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightGray';
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'whiteSmoke';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg')