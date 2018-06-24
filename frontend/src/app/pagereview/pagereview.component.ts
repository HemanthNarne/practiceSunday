import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pagereview',
  template: `
  <ul>
  <li>{{ formData.Make }}  {{ formData.Model }}  {{ formData.Year }}  {{ formData.type}}</li>
  <li>with {{formData.features }}</li>
  <li>accessories on {{formData.PurchaseDate}}</li>
  The user will get {{ discount }} %
</ul>
  `,
  styleUrls: ['./pagereview.component.css']
})
export class PagereviewComponent implements OnInit {

  formData: {};
  discount = 0;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    this.discount = new Date(this.formData['PurchaseDate']).getDate() % 2 === 0 ? 40 : 30  
    console.log(this.formData)
  }

}
