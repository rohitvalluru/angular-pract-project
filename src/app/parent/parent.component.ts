import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent{

  // msgtochild: string = "Received from parent";

  msg1 !: string;

  receivedMsg($event: string){
    this.msg1 = $event;
  }

  prntMsg: string = 'Msg from parent';
  
}
