import { Animal } from "./animal";

export class ListaAnimales {
    private animales:Animal[];

    public constructor(){
        this.animales= [];
    }

    buscar(pAnimal:Animal):boolean{
        let aux:boolean;
        aux=false;
        for (let i:number=0;i<=this.animales.length;i++){
            if (this.animales[i]===pAnimal){
                aux=true;
            }
        }
        return aux;
    }

    /* buscar(pAnimal:Animal):boolean{
        
        return this.animales.includes(pAnimal);
    } */


    agregarAnimal(pAnimal:Animal):void{
        this.animales.push(pAnimal);
    }

    removerAnimal(pAnimal:Animal):void{
        this.animales=this.animales.filter(e=>e!=pAnimal);
    }


}

