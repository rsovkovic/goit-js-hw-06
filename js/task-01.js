const items = document.querySelectorAll(".item");
console.log(items.length);
items.forEach((item) => {
  console.log(item.firstElementChild.textContent);
  // console.log(item.querySelectorAll("li").length);
  console.log(item.lastElementChild.children.length);
});
