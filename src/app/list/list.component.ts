import { Component } from '@angular/core';
import { ListItem } from '../classes/list-item.class';
import { FinaList } from '../classes/fina-list.class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  public list: FinaList = new FinaList();
  public insElement: string = "";
  public displayActionsClass: string = "actions-not-visible";

  public save(event: any) {
    let input: string = event.target.value.toUpperCase().trim()
    if (input) {
      let item: ListItem;
      if (typeof parseInt(input[0]) === "number" && input[1] === " ") {
        item = new ListItem(input.slice(2), parseInt(input[0]));
      } else {
        item = new ListItem(input, 1);
      }
      this.list.addItem(item);
      this.insElement = '';
    }
  }

  public edit(event: any, i: number) {
    let value = event.target.value.trim();
    if (value) {
      this.list.editItemName(i, value)
      return
    }
  }

  onQtAddClick(i: number) {
    this.list.getListItem(i).incrementQt();
  }

  onQtCutClick(i: number) {
    (this.list.getListItem(i).getQt() > 1) ? this.list.getListItem(i).decrementQt() : this.list.delItem(i);
  }

  onQtDelClick(i: number) {
    this.list.delItem(i);
  }

}
