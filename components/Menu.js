// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
  // The 'menuMaker' takes an array of menu items as its only argument.
function menuMaker (array) {
  //create the elements and add classes
  const menuDiv = document.createElement("div");
  const menuList = document.createElement("ul");
  menuDiv.classList.add("menu");

//loop through menu array, create item, add content, and attach
  array.forEach(item => {
    const menuListItem = document.createElement("li");
    menuListItem.textContent = item;
    menuList.appendChild(menuListItem);
  })

//attach the list to the menu div
  menuDiv.appendChild(menuList);


// Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
const menuButton = document.querySelector(".menu-button");

// Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

menuButton.addEventListener("click", () => {
  menuDiv.classList.toggle("menu--open")
})


 // Step 5: Don't forget to return your div.menu.
return menuDiv;
}

  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

const header = document.querySelector(".header");
header.appendChild(menuMaker(menuItems));

