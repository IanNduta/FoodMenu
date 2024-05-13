"use strict";
let menu = {
    drinks : [
     "Water", "Tea", "Sweet Tea",
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
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
    const menuSelection = document.getElementById("menuSelection");
    const menuList = document.getElementById("otherMenuSelection");
//output
    const mealSelectedOutput = document.getElementById("outputMeal");
//button
    const submitBtn = document.getElementById("submitBtn");

window.onload = function(){
    submitBtn.onclick = onClickeSubmitBtn;
    initmenuSelectionItems()
}

function onClickeSubmitBtn(){
    console.log("push");
}