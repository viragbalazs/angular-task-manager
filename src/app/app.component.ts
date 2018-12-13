import { Component } from '@angular/core';
import {AppModel, AppInterface} from './app.model';

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

  public changeChecked(isChecked: Event) {
    this.appModel.checked = !!isChecked;
  }

}



