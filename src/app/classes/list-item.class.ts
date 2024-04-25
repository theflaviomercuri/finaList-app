export class ListItem {

    private name: string;
    private qt: number;

    public constructor(name: string, qt: number){
        this.name = name;
        this.qt = qt;
    }

    public setName(name: string){
        this.name = name;
    }

    public setQt(qt: number){
        this.qt = qt;
    }
    
    public getName(): string{
        return this.name;
    }
    
    public getQt(): number{
        return this.qt;
    }

    public decrementQt(): void {
        this.qt --;
    }
    
    public incrementQt(): void {
        this.qt ++;
    }
    
}