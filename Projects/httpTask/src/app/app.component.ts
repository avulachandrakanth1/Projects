import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  postId;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<any>('https://reqres.in/api/posts', { name: 'Angular POST Request Example' }).subscribe(data => {
        this.postId = data.id;
    })
}
}