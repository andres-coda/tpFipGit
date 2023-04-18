import { Animal } from "./animal";

export class Arana extends Animal{
    public constructor(pPatas:number){
        super(pPatas);
    }

    public comer(){
        console.log("comiendo");
    }

    public caminar(pPatas: number): void {
        console.log(`la araña esta caminando con sus ${pPatas} patas`);
        
    }
}
