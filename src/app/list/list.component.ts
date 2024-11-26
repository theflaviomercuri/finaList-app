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
  public displayToggle: boolean = true;
  public helpButtonLabel: string = "+help";

  public save(event: any) {
    let input: string = event.target.value.toUpperCase().trim()
    if (input) {
      let item: ListItem;
      const maybeMoreThenOne = this.getNumberFromString(input);
      if (maybeMoreThenOne.valid) {
        if (maybeMoreThenOne.pacs === 0) maybeMoreThenOne.pacs++;
        item = new ListItem(input.slice(maybeMoreThenOne.index), maybeMoreThenOne.pacs);
        this.list.addItem(item);
        this.insElement = '';
        return;
      }
      item = new ListItem(input, 1);
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

  getNumberFromString(checkMe: string): { valid: boolean, index: number, pacs: number } {
    let response: { valid: boolean, index: number, pacs: number } = {
      valid: false,
      index: 0,
      pacs: 1,
    }
    let pacsInStr: string = "";
    for (let i = 0; i < checkMe.length; i++) {
      if (isNaN(parseInt(checkMe[i]))) {
        response.valid = (i > 0 && checkMe[i] === " ") ? true : false;
        break
      };
      pacsInStr = pacsInStr.concat(checkMe[i])
      response.index++;
    }
    response.pacs = parseInt(pacsInStr);
    response.index++;
    return response;
  }
  onDisplayToggle() {
    this.displayToggle = !this.displayToggle;
    this.helpButtonLabel = (this.displayToggle) ?  "+help" : "-help"
  }
}
