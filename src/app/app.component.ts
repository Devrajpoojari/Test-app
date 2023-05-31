import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-test-app';

  constructor(public dialog: MatDialog) {}

  aboutUs() {
    this.dialog.open(AboutUsComponent);
  }
  contactus(){
    this.dialog.open(ContactusComponent);
  }
}
