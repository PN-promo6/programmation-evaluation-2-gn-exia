let home = document.createElement("div")
document.body.appendChild(home);

let title = document.createElement("h1");
home.appendChild(title);
title.textContent = "Cinéma Le Dauphin";


let text = document.createElement("p");
home.appendChild(text);
text.textContent = "Une salle de cinéma grand confort, un restaurant et une sélections de vins de qualité. Des avant-premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 a 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)";

let movies = document.createElement("div")
document.body.appendChild(movies);
movies.style.display = none


let button_movies = document.createElement("input");
home.appendChild(button_movies);
button_movies.type = "button";
button_movies.value = "Voir les films a l'affiche cette semaine";
button_movies.addEventListener("click", function() {
home.style.display = none
movies.style.display = block
}



let on_your_screen = [
  []
];
