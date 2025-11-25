import { Component } from '@angular/core';
import { IonTabBar, IonTabs, IonLabel, IonTabButton, IonIcon } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonicModule]
})
export class TabsPage {

  constructor() {}

}
