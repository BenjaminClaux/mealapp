// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
// Tester le lien dans le navigateur.

// Créer une fonction pour "fetcher" les données, passer ces donées dans une variable.

// Afficher les données via une fonction (map) : recette, origine, image

let mealData = [];

async function theMeal() {
  await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + aliment.value
  )
    .then((res) => res.json())
    .then((data) => (mealData = data.meals));

  console.log(mealData);
  mealDisplay();
}
theMeal();

function mealDisplay() {
  aliments.innerHTML = mealData.slice(0, 12).map(
    (plat) => `
    <div class="menu">
    <h2> ${plat.strMeal} </h2>
    <p> ${plat.strArea} </p>
    <img src = "${plat.strMealThumb}">
    <iframe src="${plat.strYoutube.replace(
      "watch?v=",
      "embed/"
    )}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `
  );
}

aliment.addEventListener("input", theMeal);
// BONUS
// Lister les ingrédients + mesure

// Afficher la vidéo de la recette (méthode replace)

// if(mealDisplay === null) {
//   searchResult.innerHTML = "<h2>Aucun résultat</h2>";
// return
// }
