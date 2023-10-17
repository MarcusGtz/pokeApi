import { Component, Input } from '@angular/core';

@Component({
  selector: 'berries-table',
  templateUrl: './berries-table.component.html',
  styleUrls: [

  ]
})
export class BerriesTableComponent {

  @Input()
  public berry: any;

}
