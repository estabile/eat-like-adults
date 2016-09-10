$(document).foundation()



var proteins = [
                {name: "Chicken Breast" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Turkey Breast" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Lean Ground Turkey Breast" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Swordfish" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Orange Roughy" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Salmon" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Tuna" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Ahi Tuna" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Filet Mignon" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Cottage Cheese" , vegetarian: true , vegan: false, glutenFree: true},
                {name: "Top Round Steak" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Top Sirloin Steak" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Extra-Lean Ground Beef" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Tri-Tip Steak" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Egg Whites" , vegetarian: false , vegan: false, glutenFree: true},
                {name: "Tofu" , vegetarian: true , vegan: true, glutenFree: true},
                {name: "Seitan" , vegetarian: true , vegan: true, glutenFree: true},
                {name: "Tempeh" , vegetarian: true , vegan: true, glutenFree: true},
                ];

var vegetarianProteins = proteins.filter(function(protein){
    return protein.vegetarian === true
})

var veganProteins = proteins.filter(function(protein){
    return protein.vegan === true
})

var carbs = [
              {name: "Tempeh", glutenFree: true},
              {name: "Yams", glutenFree: true},
              {name: "Sweet Potato", glutenFree: true},
              {name: "Red Potato", glutenFree: true},
              {name: "Steamed Brown Rice", glutenFree: true},
              {name: "Steamed Wild Rice", glutenFree: true},
              {name: "Oatmeal", glutenFree: true},
              {name: "Barley", glutenFree: false},
              {name: "Beans", glutenFree: true},
              {name: "Fat-Free Yogurt", glutenFree: true},
              {name: "Squash", glutenFree: true},
              {name: "Whole-Wheat Bread", glutenFree: true},
              {name: "Quinoa", glutenFree: true},
              {name: "Lentils" , glutenFree: true},
            ];

/*var glutenFreeCarbs = carbs.filter(function(carb){
    return carb.glutenFree === true
  })*/

var vegetables = ["Broccoli", "Asparagus", "Romaine Lettuce", "Green Beans",
                 "Cauliflower", "Spinach", "Green Peppers", "Green Peas", "Zucchini",
                 "Cucumbers", "Brussel Sprouts", "Artichoke", "Cabbage"];



function GetValue()
{
    var randomP = proteins[Math.floor(Math.random() * proteins.length)].name;
    var randomC = carbs[Math.floor(Math.random() * carbs.length)].name;
    var randomV = vegetables[Math.floor(Math.random() * vegetables.length)];
    var randomPVegetarian = vegetarianProteins[Math.floor(Math.random() * vegetarianProteins.length)].name;
    var randomPVegan = veganProteins[Math.floor(Math.random() * veganProteins.length)].name;
    //var randomCGlutenFree = glutenFreeCarbs[Math.floor(Math.random() * glutenFreeCarbs.length)].name;

if (document.getElementById("vegetarian" && "vegan").checked === true)
  {
  document.getElementById("message").innerHTML=randomPVegan +", "+randomC +", and "+randomV;
  }
    else if(document.getElementById("vegan").checked === true)
    {
    document.getElementById("message").innerHTML=randomPVegan +", "+randomC +", and "+randomV;
    }
      else if (document.getElementById("vegetarian").checked === true)
      {
      document.getElementById("message").innerHTML=randomPVegetarian +", "+randomC +", and "+randomV;
      }
        else
        {
        document.getElementById("message").innerHTML=randomP +", "+randomC+", and "+randomV;
        }
}

function redirect()
    {
    var url = "http://www.google.com/search?q=" + encodeURIComponent(document.getElementById("message").innerHTML);
    window.location.href=(url);
    }
