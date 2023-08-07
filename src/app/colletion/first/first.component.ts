import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  entries: Entries[] = [];
  shortList : Entries[] = [];
  goToSecond() {
    console.log(this.entries[0].API);
  }

  getList(){
    this.shortList = this.entries.slice(0, 3);
  }

  constructor(private http : HttpClient) { }
  ngOnInit(): void {
      const url = 'https://api.publicapis.org/entries';
      const data =  this.http.get(url);
      data.subscribe((result : any) => {
        this.entries = result.entries;
      });
  }
}

type Entries = {
  API : string,
  Description : string,
  Auth : string,
  HTTPS : boolean,
  Cors : string,
  Link : string,
  Category : string
};
