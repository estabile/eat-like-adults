$(document).foundation()
function GetValue()
{
var proteins = ["Chicken Breast", "Turkey Breast", "Lean Ground Turkey Breast",
                "Swordfish", "Orange Roughy", "Salmon","Tuna", "Ahi Tuna",
                "Filet Mignon", "Cottage Cheese","Top Round Steak","Top Sirloin Steak",
                "Extra-Lean Ground Beef","Tri-Tip Steak", "Egg Whites"];


var carbs = ["Fruit", "Yams", "Sweet Potato", "Red Potato", "Steamed Brown Rice",
             "Steamed Wild Rice", "Oatmeal", "Barley", "Beans", "Fat-Free Yogurt",
             "Cream of Wheat", "Squash", "Whole Wheat Bread"];

var vegetables = ["Broccoli", "Asparagus", "Romaine Lettuce", "Green Beans",
                 "Cauliflower", "Spinach", "Green Peppers", "Green Peas", "Zucchini",
                 "Cucumbers", "Brussel Sprouts", "Artichoke", "Cabbage"];

    var randomP = proteins[Math.floor(Math.random() * proteins.length)];
    var randomC = carbs[Math.floor(Math.random() * carbs.length)];
    var randomV = vegetables[Math.floor(Math.random() * vegetables.length)];

    document.getElementById("message").innerHTML=randomP +", "+randomC+", and "+randomV;
}

function redirect()
    {
    var url = "http://i.imgur.com/bZgYdGg.jpg";
    window.location.href=(url);
    }
