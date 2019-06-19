import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  constructor(private http : HttpClient)
  {
      this.http.get('http://localhost:3000/book').subscribe(
        (res:any) => {
          console.log(res);
          this.title = res.result;
        }
      )
  }
}
