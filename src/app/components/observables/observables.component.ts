import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  films: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getfilms();
    // checking stream from observables
    this.observaleTest();
  }

  // using observable as API hit 
  getfilms(){
    const url = "https://swapi.co/api/films"

    let headers = new HttpHeaders({
      'content-type': 'application/json'
    });

    this.http.get(url, {headers}).subscribe({
      next: res=> {
        this.films = res,
        console.log(this.films);
      },
      error: xhr => console.error(xhr.statusText),
      complete() { console.log('finished.'); }
    });
  }

  // Create simple observable that emits three values
  myObservable = of(1, 2, 3);

  // Create observer object
  myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  // Execute with the observer object
  observaleTest(){
    this.myObservable.subscribe(this.myObserver);
  }

}
