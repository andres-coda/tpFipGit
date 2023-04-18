import { Animal } from "./animal";
import { Mascota } from "./mascota";

export class Pez extends Animal implements Mascota{
    private nombre:string;

    public constructor(pPatas:number, pNombre:string){
        super(pPatas);
        this.nombre=pNombre;
    }

    comer(): void {
        console.log("comiendo");
        
    }
    caminar(pPatas: number): void {
        console.log(`el pez camina con sus ${pPatas} patas`);
        
    }
    getNombre(): string {
        return this.nombre;
    }
    setNombre(pNombre: string): void {
        this.nombre=pNombre;
    }
    jugar(pNombre: string): void {
        console.log(`${pNombre} esta jugando`);
    }

}