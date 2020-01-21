import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  wifiSetting() {
    // code for setting wifi option in apps
  }

  logout() {
	// code for logout
  }

  eventFromPopover() {
    this.popoverController.dismiss();
  }

}
