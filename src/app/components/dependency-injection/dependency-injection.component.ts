import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {

  // Car
  // |
  // |--Engine
  // |  |  
  // |  |--Pistons
  // |
  // |--Wheels

  action: any;

  constructor() { }

  ngOnInit() {
    this.car();
  }

  pistons(){
    this.action = {
      work: "The pistons fire up."
    }
    console.log(this.action);
  }

  engine() {
    this.pistons();

    this.action = {
      work: "The engine goes vroom vroom."
    }
    console.log(this.action);
  }

  wheels() {
    this.action = {
      work: "The wheels go 'round and 'round."
    }
    console.log(this.action);
  }

  car() {
    this.engine();
    this.wheels();

    this.action = {
      work: "The car drives by."
    }
    console.log(this.action);
  }

}
