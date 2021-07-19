import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    displayName: new FormControl('', Validators.required), 
    age: new FormControl(110, Validators.max(120)), 
    nickname: new FormControl('', Validators.required), 
    favoriteColor: new FormControl('#00FF00')
  });


  toggleFormDisabled() {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
