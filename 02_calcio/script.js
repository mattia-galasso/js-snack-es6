/*
? Snack2

    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
    Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//? General Variable
const minPoint = 1;
const maxPoint = 100;
const minFoulsSuffered = 1;
const maxFoulsSuffered = 500;

const teams = [
  {
    name: "Milan",
    point: 0,
    foulsSuffered: 0,
  },
  {
    name: "Inter",
    point: 0,
    foulsSuffered: 0,
  },
  {
    name: "Juventus",
    point: 0,
    foulsSuffered: 0,
  },
  {
    name: "Roma",
    point: 0,
    foulsSuffered: 0,
  },
  {
    name: "Napoli",
    point: 0,
    foulsSuffered: 0,
  },
];

const compactTeams = [];

for (const team of teams) {
  team.point = Math.floor(Math.random() * (maxPoint - minPoint) + minPoint);
  team.foulsSuffered = Math.floor(
    Math.random() * (maxFoulsSuffered - minFoulsSuffered) + minFoulsSuffered,
  );
  compactTeams.push({
    name: team.name,
    foulsSuffered: team.foulsSuffered,
  });
}

console.table(teams);
console.table(compactTeams);
