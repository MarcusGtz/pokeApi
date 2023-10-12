import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value:string ): void {
    this.onValue.emit( value );
  }

}
