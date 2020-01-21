import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  gotoPage1(){
    this.router.navigate(['page1']);
  }
  gotoPage2(){
    this.router.navigate(['page2']);
  }
  gotoPage3(){
    this.router.navigate(['page3']);
  }

  gotoAvatar(){
    this.router.navigate(['avatar']);
  }

  gotoRest(){
    this.router.navigate(['rest']);
  }

}
