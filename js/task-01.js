const categ = document.querySelectorAll(".item");
const qwe = categ.forEach(item => {  
    console.log(`Category:`, item.firstElementChild.textContent );
    console.log(`Elements:`, item.lastElementChild.childElementCount);
});
console.log(`Number of categories:`, categ.length);
