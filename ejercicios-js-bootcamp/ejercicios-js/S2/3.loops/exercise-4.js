const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const toysSinGato = [] ;

for (const toy of toys) {
  if (!toy.name.includes('gato')) {
    toysSinGato.push(toy);
  }
}

console.log(toysSinGato);