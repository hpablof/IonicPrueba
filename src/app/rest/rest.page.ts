import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {

  misPosts: Observable<any>;
  constructor(private dataService:PostService) { }

  ngOnInit() {
    this.misPosts=this.dataService.getPost();
    this.dataService.getPost().subscribe(console.log);
  }

}
