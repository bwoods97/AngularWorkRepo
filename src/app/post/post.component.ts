import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `
  <div>
  <h3>Post Title</h3>
  <button id="hideShow" (click)= "hideShow()" style="margin-left: 75%; margin-right: 25%;">
      {{buttonName}}
  </button>
  <div style="border: 2px solid crimson">
  

  <br/>
  <p *ngIf="showHideDesc" style= "margin: 20px 20px 20px 20px">This is a test description post.This is a test description post.This is a test description post.This is a test description post.This is a test description post.This is a test description post.</p>
  </div>
</div>
`,
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public showHideDesc:boolean = true;
  public buttonName:any = "Hide";

  ngOnInit () {  }

   hideShow() {
    this.showHideDesc = !this.showHideDesc;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showHideDesc)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}

