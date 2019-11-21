import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.closureJS('Muhamamd', 'Awais'));
  }

  closureJS(firstname, lastname) {
    let name = 'Your name is:' ;
    
    function makeFullName() {
      return name +' '+firstname+' '+lastname;
    }

    return makeFullName();
  }

}
