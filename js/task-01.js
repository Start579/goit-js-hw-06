const categ = document.querySelectorAll(`.item`);
const categTitle = document.querySelectorAll(`.item h2`);
const categEl = document.querySelectorAll(`ul`);

console.log(`Number of categories:`, categ.length);

console.log(`Category:`, categTitle[0].textContent);
console.log(`Elements:`, categEl[1].children.length);

console.log(`Category:`, categTitle[1].textContent);
console.log(`Elements:`, categEl[2].children.length);

console.log(`Category:`, categTitle[2].textContent);
console.log(`Elements:`, categEl[3].children.length);