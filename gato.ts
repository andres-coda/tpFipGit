import { Animal } from "./animal";
import { Mascota } from "./mascota";

export class Gato extends Animal implements Mascota{
    private nombre:string;

    public constructor (pPatas:number, pNombre:string){
        super(pPatas);
        this.nombre=pNombre;
    }

    public comer(): void {
        console.log("comiendo");
        
    }

    public jugar(pNombre:string):void{
        console.log(`${pNombre} esta jugando`);
        
    }

 //   public walk(pPatas:number){
 //       console.log(`el gato camina con sus ${pPatas} patas`);
 //       
 //   }

    public caminar(pPatas:number){
        console.log(`el gato camina con sus ${pPatas} patas`);
        
    }


    public getNombre():string{
        return this.nombre;
    }

    public setNombre(pName:string):void{
        this.nombre=pName;
    }
}