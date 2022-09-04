const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const addLielem = document.querySelector("#ingredients");

const vegetables = ingredients.map(ingredient => {
const liEl = document.createElement(`li`);
liEl.textContent = ingredient;
return liEl;
});

console.log(vegetables);

addLielem.append(...vegetables);