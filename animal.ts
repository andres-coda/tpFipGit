export abstract class Animal  {

    protected patas:number;

    public constructor(pPatas:number) {
        this.patas=pPatas;
    }


    getIntPatas ():number{
        return this.patas;
    };

    setIntPtas(pPatas:number):void{
        this.patas=pPatas;
    };

    abstract comer():void;
    abstract caminar(pPatas:number):void;

}