import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Enter Your Name';
  age = 21;
  count = 0;
  Fruits = ["Apple", "Mango", "Banana"];
  FruitPrice = [{ name: "Apple", price: "20/kg" },
  { name: "Mango", price: "30/kg" },
  { name: "Banana", price: "10/kg" }
  ];

  EmployeeWithDepartment = [{ name: "ashfak", email: "ashfaque@gmail.com", Department: [{ Id: "1", name: "IT" }] },
  { name: "ramesh", email: "ramesh@gmail.com", Department: [{ Id: "2", name: "CS" }] }

  ];






  GetAge()
  {
    return this.age;
  };
  GetData(val: string)
  {
    this.title = val;
  }
  counter(val: string)
  {
    val === "Increament" ? this.count++ : this.count--;
  }

  //LoginForm = new FormGroup({
  //  UserTxt: new FormControl(''),
  //  PasswordTxt: new FormControl('')
  //})
  LoggedIn(Data: any)
  {
    alert(Data);
  }
}
