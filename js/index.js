const voitures = ["Renault Scénic", "Fiat 500", "Ford Escort","Porsche 911","Citroën 2CV"];
voitures.pop();
//supprime le dernier
console.log(voitures.length);
//supprime 2 éléments à partir de l'indice 1
voitures.splice(1,2);
console.log(voitures.length);
for (const voiture of voitures) {
console.log(voiture);
}