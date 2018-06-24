import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-page2',
  template: `
  <form #formpart2="ngForm" (ngSubmit)="signin(formpart2)">
  
  <fieldset>
    <legend>Features</legend>
    <div class="col-sm-5">
      <input type="checkbox" id="GPS" name="GPS" value="GPS" ngModel>
      <label for="GPS">GPS</label>
    </div>
    <div class="col-sm-5">
      <input type="checkbox" id="SecurityLock" name="SecurityLock" value="SecurityLock" ngModel>
      <label for="SecurityLock">Security Lock</label>
    </div>
    <div class="col-sm-5">
      <input type="checkbox" id="CargoMat" name="CargoMat" value="CargoMat" ngModel>
      <label for="CargoMat">CargoMat</label>
    </div>
  </fieldset>
  
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Purchase Date</label>
    <div class="col-sm-5">
      <input type="date" class="form-control" id="inputEmail3" placeholder="PurchaseDate" ngModel name="PurchaseDate">
    </div>
  </div>
  

  
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
  
</form>
  `,
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private router:Router,private http:HttpService) { }

  ngOnInit() {
    
  }

  signin(form){
      var formpart1 = this.http.getForm()
      form.value['features'] = []   
      for(var ele of ['GPS',"SecurityLock","CargoMat"]){
          if(form.value[ele]){
            console.log(ele)
            form.value['features'].push(ele)
            console.log(form.value['features'])
          }
      }

      this.http.setForm( { ...formpart1, ...form.value } )
      this.http.postService().subscribe(
        res => {
          console.log(res)
          this.router.navigateByUrl('/summary')
        },
        err => {
            console.log(err)
        }
      )
      
      
  }


}