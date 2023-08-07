import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myString: string = "This is my string.";
  tempName:string = ""
  name = 'John Doe';

  message: string = 'Initial message';

  applyChange(){
    this.name=this.tempName;
  }

  getChange(event: any) {
    const newValue = event.target.value;
    if (newValue !== null) {
      this.tempName=newValue;
    }
  }
  constructor(){
    
  }
}
