const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
console.log(list);
function renderList() {
  const markup = ingredients.map((ingredient) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = ingredient;
    return item;
  });
  list.append(...markup);
}

renderList();
