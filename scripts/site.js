"use strict";
let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};
//input
const customerMenuCategory = document.getElementById("menuCategory");
const menuList = document.getElementById("MenuSelection");

window.onload = function () {
    customerMenuCategory.onchange = onMenuSelectionChanged;
}

function onMenuSelectionChanged() {
    //what category did the user select?
    let categorySelected = customerMenuCategory.value;
    console.log(categorySelected);

    if (categorySelected == null) {
        console.log("no category was selected");
    }
    else if (categorySelected == "drinks") {
        displayItemsInList(menu.drinks);
    }
    else if (categorySelected == "entrees") {
        displayItemsInList(menu.entrees);
    }
    else if (categorySelected == "desserts") {
        displayItemsInList(menu.desserts);
    }
    //using that category, find a list of menu items that are in that category

    //using that list of menu items in the category, display those into the listbox.
}

function displayItemsInList(arrayOfStrings) {
    //clear any existing items in the listbox..
    menuList.options.length = 0;
    //loop through this array of strings and add all the items to the listbox

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let newOptions = document.createElement("option");
        newOptions.value = arrayOfStrings[i];
        newOptions.innerHTML = arrayOfStrings[i];
        menuList.appendChild(newOptions);
    }

}
