import { Pez } from "./pez";
import { Gato } from "./gato";
import { Arana } from "./araña";
import { Mascota } from "./mascota";
import { ListaAnimales } from "./listaAnimales";

let gato1 = new Gato(4,"minino");
let arana1= new Arana(8);
let juanito = new Pez(4,"Doris");
let gato2 = new Gato(4,"catara");

let animales1 = new ListaAnimales();

animales1.agregarAnimal(gato1);
animales1.agregarAnimal(arana1);
animales1.agregarAnimal(juanito);

console.log(animales1.buscar(juanito));

console.log(animales1);
animales1.removerAnimal(juanito);

console.log(animales1);

juanito.setIntPtas(0);
console.log(juanito.getIntPatas());


arana1.caminar(8);
gato1.jugar(gato1.getNombre());
gato2.jugar(gato2.getNombre());

animales1.agregarAnimal(gato2);

console.log(animales1);

