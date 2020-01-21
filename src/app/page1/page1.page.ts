import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PickerController} from '@ionic/angular';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  private person:any={
    name:'',
    admin:false,
    gender:'',
    active:false,
    items:null,
    date:'',
    description:'',
    hair:''
  };
  constructor(private router:Router,
              private pickerController:PickerController) { }

  async presentPicker() {
    const picker = await this.pickerController.create({
    animated: true,
    buttons: [{
      text: 'Cancel',
      handler: () => console.log('Cancel')
    }, {
      text: 'Save',
      handler: (val) => {
        console.log('Save', val);
      }
    }],
    columns: [
      {
        name: 'hours',
        prefix: 'total',
        suffix: 'hours',
        options: [
          {
            text: '1',
            value: '01'
          },
          {
            text: '2',
            value: '02'
          },
          {
            text: '3',
            value: '03'
          }
        ]
      }
    ],
    cssClass: 'picker-hours',
    mode: 'ios',
    });
    picker.present();
  }
  ngOnInit() {
  }

  unread(item){
    console.log(item);
  }
  gotoHome()
  {
    this.router.navigate(['home']);
  }

  submit(){
    console.log(this.person)
  }
}

