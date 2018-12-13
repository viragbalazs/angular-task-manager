import { Component } from '@angular/core';
import {AppModel, AppInterface, Category} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'task-manager';

  public appModel = new AppModel();
  
  public appImpl: AppInterface = <AppInterface>{};
  
  constructor() {
  }
  
  showAppModelValue() {
    console.log(this.appModel);
  }

  getColor(checked: boolean):string {
    return checked ? 'green' : 'red'; 
  } 

  public changeChecked(isChecked: Event) {
    this.appModel.checked = !!isChecked;
  }

  colorCategory() {
    if (this.appModel.category) {
      return {'background-color': 'blue', 'color': 'white'}
    }
  }

}



