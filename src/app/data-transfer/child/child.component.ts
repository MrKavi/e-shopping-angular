import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements OnInit {
  @Input() nameData: any;
  @Input() markData: any;
  //obj
  @Input() objData: any;
  NameList = [{ name: 'Kavi', mark: 100 }];
  constructor() {}
  //viewchild
  updateList(obj: any) {
    this.NameList.push(obj);
    //response
    return obj.name + ' is successfully added';
  }
  ngOnInit(): void {}
}
