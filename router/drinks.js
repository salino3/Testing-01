const router = require('express').Router();
const fetch = require("node-fetch");


// Search Cocktails By Ingredients
router.get("/ingredients/:cocktailApi", async (req, res) => {
  try {
    const { cocktailApi } = req.params;

    const apiResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${cocktailApi}`
    );
    const apiResponseJson = await apiResponse.json();

    const { ingredients } = apiResponseJson;

    const filteredDrinks = ingredients.map((ingredient) => ({
      idIngredient: ingredient.idIngredient,
      strIngredient: ingredient.strIngredient,
      strDescription: ingredient.strDescription,
      strType: ingredient.strType,
      strAlcohol: ingredient.strAlcohol,
      strABV: ingredient.strABV,
    }));

    res.status(200).json(filteredDrinks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong" });
  }
});



// Search Cocktails By Name
router.get("/cocktail/:cocktailApi", async (req, res) => {
  try {
    const { cocktailApi } = req.params;

    const apiResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailApi}`
    );
    const apiResponseJson = await apiResponse.json();

    const { drinks } = apiResponseJson;

    const filteredDrinks = drinks.map((drink) => ({
      strDrink: drink.strDrink,
      strDrinkAlternative: drink.strDrinkAlternative,
      strTags: drink.strTags,
      strCategory: drink.strCategory,
      strAlcoholic: drink.strAlcoholic,
      strGlass: drink.strGlass,
      strInstructions: drink.strInstructions,
      strIngredient1: drink.strIngredient1,
      strMeasure1: drink.strMeasure1,
    }));

    res.status(200).json(filteredDrinks);
  } catch (err) {
    console.error(err);
    res.status(500).json({msg: "Something went wrong"});
  }
});





module.exports = router;

