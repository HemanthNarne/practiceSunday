import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-page1',
  template: `
   <form #formpart1="ngForm" (ngSubmit)="signin(formpart1)">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Make</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Enter Make" ngModel name="Make">
    </div>
  </div>
    <div class="form-row align-items-center">
      <div class="col-auto my-1">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Model</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" ngModel name="Model">
          <option value="Civic">Civic</option>
          <option value="Odyssey">Odyssey</option>
          <option value="Pilot">Pilot</option>
          <option value="Accord">Accord</option>
        </select>
      </div>
    </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Year</label>
    <div class="col-sm-5">
      <input type="number" class="form-control" id="inputPassword3" placeholder="Year" ngModel name="Year">
    </div>
  </div>

  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Type</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="Type" id="gridRadios1" value="Sedan" ngModel checked>
          <label class="form-check-label" for="gridRadios1">
            Sedan
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="Type" id="gridRadios2" value="Coupe" ngModel>
          <label class="form-check-label" for="gridRadios2">
            Coupe
          </label>
        </div>
      
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">next</button>
    </div>
  </div>
</form>
  `,
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

 
  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
  }

  signin(form){
    this.http.setForm(form.value)
    this.router.navigateByUrl('/part2')
  }

}
