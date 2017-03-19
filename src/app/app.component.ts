import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  cuisines: FirebaseListObservable<any[]>;
  restaurants: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {

  }

  ngOnInit() {
    this.cuisines = this.af.database.list('/cuisines');
    this.restaurants = this.af.database.list('/restaurants');
  }

  add(){
    this.cuisines.push({
      name: 'Asain'
    });
  }

  update(){
    this.af.database.object('/restaurants')
  }

  remove(){
    this.af.database.object('/restaurant').remove()
    .then(x => console.log("SUCCESS"))
    .catch(error => console.log('ERROR'))
  }
  

}
