import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  public list: string[] = [];
  public insElement: string = "";
  public displayActionsClass: string = "actions-not-visible";

  public save(event: any) {
    let item: string = event.target.value.toUpperCase().trim();
    if (item) {
      this.list.push(item);
      this.insElement = '';
    }
  }

  public edit(event: any, i: number) {
    let value = event.target.value.trim();
    (value) ? this.list[i] = value : this.list.splice(i, 1);
  }

}
