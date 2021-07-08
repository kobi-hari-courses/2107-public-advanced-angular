import { Component, Inject } from '@angular/core';
import { NAME_TOKEN } from './common-stuff/name-token';
import { Person } from './core/models/person.model';
import { AComponent } from './shared/components/a/a.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(NAME_TOKEN) public name: string){}
  title = 'fun-with-routing';

  stam() {
    // let ac = new AComponent(null);
    // let res = ac.add(5, 5);
    // console.log(res);
  }

  p: Person = {
    firstName: 'Kobi', 
    lastName: 'Hari'
  }
}
