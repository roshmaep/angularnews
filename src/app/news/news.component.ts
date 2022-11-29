import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor(private api:ApiService){
    api.fetchNews().subscribe((response)=>{this.data=response;})
  }
data:any=[]
}
