import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(
    private pickerController: PickerController
  ) { }

  ngOnInit() {
  }
  // Select
  pizzaTopping:any[]=[
    { id:1,text: 'Bacon'},
    { id:2,text: 'Black Olives'},
    { id:3,text: 'Extra Chesse'},
    { id:4,text: 'Green Peeper'},
    { id:5,text: 'Mushrooms'},
    { id:6,text: 'Onions'},
    { id:7,text: 'Pepperoni'},
    { id:8,text: 'pineapple'},
    { id:9,text: 'sausage'},
    { id:10,text: 'Spinach'},
  ]
  selection:any;
  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };
  onCancel(){
    console.log('Cancel Click!');
  }
  onChange(){
    console.log('OK CLick!',this.selection);
  }

  //Picker 
  async presentPicker() {
    const picker = await this.pickerController.create({
    animated: true,
    buttons: [{
      text: 'Cancel',
      handler: () => console.log('Cancel Click!')
    }, {
      text: 'OK',
      handler: (data) => {
        console.log('Ok Click', data);
      }
    }],
    columns: [
      {
        name: 'day',
        options: [
          { text: '1',value: '01'},
          { text: '2',value: '02'},
          { text: '3',value: '03'},
          { text: '4',value: '04'},
          { text: '5',value: '05'},
          { text: '6',value: '06'},
          { text: '7',value: '07'},
          { text: '8',value: '08'},
          { text: '9',value: '09'},
          { text: '10',value: '10'},
          { text: '11',value: '11'},
          { text: '12',value: '12'},
          { text: '13',value: '13'},
          { text: '14',value: '14'},
          { text: '15',value: '15'},
          { text: '16',value: '16'},
          { text: '17',value: '17'},
          { text: '18',value: '18'},
          { text: '19',value: '19'},
          { text: '20',value: '20'},
          { text: '21',value: '21'},
          { text: '22',value: '22'},
          { text: '23',value: '23'},
          { text: '24',value: '24'},
          { text: '25',value: '25'},
          { text: '26',value: '26'},
          { text: '27',value: '27'},
          { text: '28',value: '28'},
          { text: '29',value: '29'},
          { text: '30',value: '30'},
        ]
      },
      {
        name: 'month',
        options: [
          { text: 'January',value: '01'},
          { text: 'February',value: '02'},
          { text: 'March',value: '03'},
          { text: 'April',value: '04'},
          { text: 'May',value: '05'},
          { text: 'June',value: '06'},
          { text: 'July',value: '07'},
          { text: 'August',value: '08'},
          { text: 'September',value: '09'},
          { text: 'October',value: '10'},
          { text: 'November',value: '11'},
          { text: 'December',value: '12'},
        ]
      }
    ],
    mode: 'ios',
    });
    picker.present();
  }
}
