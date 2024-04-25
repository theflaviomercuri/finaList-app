import { ListItem } from "./list-item.class";

export class FinaList {

    private list: ListItem[];

    public constructor(){
        this.list = [];
    }

    public addItem(item: ListItem){
        this.list.push(item);
    }

    public delItem(index: number){
        this.list.splice(index, 1);
    }

    public editItemName(index: number, nuName: string){
        this.list[index].setName(nuName);
    }

    public getList(): ListItem[]{
        return this.list;
    }
    
    public getListItem(index: number): ListItem{
        return this.list[index];
    }

}