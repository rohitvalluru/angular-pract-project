import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Input() msg!: string;

  message: string = "Sending from Child";
  @Output() msgEvent = new EventEmitter<string>();

  sendMsg(){
    this.msgEvent.emit(this.message)
  }
  
}
