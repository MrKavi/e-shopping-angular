import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.css'],
})
export class DataTransferComponent implements OnInit {
  //session storage  state management
  constructor() {
    //   sessionStorage.setItem(name:"Welcome to Bytecode");
  }

  @ViewChild(ChildComponent) viewdata!: ChildComponent;
  inputname = '';
  inputmark = '';
  //objec pass
  inputObj = { name: '', mark: '' };
  //response
  response: any;
  TransferData(name: any, mark: any) {
    this.inputname = name;
    this.inputmark = mark;
    //obj
    this.inputObj = { name: name, mark: mark };
    //Viewchild
    this.response = this.viewdata.updateList(this.inputObj);
  }
  ngOnInit(): void {}
}
