/* 
? Snack 1

    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore. 
*/

const minWeightH2 = document.getElementById("min-weight");

const bikes = [
  {
    name: "Dogma",
    weight: 6.8,
  },
  {
    name: "Tarmac",
    weight: 6.7,
  },
  {
    name: "Trek",
    weight: 6.6,
  },
  {
    name: "Bianchi",
    weight: 7.4,
  },
  {
    name: "Canyon",
    weight: 4.9,
  },
];

let bikeMinWeight = bikes[0];

for (const bike of bikes) {
  const currentWeight = bike.weight;
  const minWeight = bikeMinWeight.weight;

  if (currentWeight < minWeight) {
    bikeMinWeight = bike;
  }
}

minWeightH2.innerText = bikeMinWeight.name;

console.table(bikes);
console.table(bikeMinWeight);
