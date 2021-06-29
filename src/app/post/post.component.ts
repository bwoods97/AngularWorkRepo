import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `
  <div>
  <h3>{{title}}</h3>
  <button id="hideShow" (click)= "hideShow()" style="margin-left: 75%; margin-right: 25%;">
      {{buttonName}}
  </button>
  <div style="border: 2px solid crimson">
  

  <br/>
  <p [style.display]= "show ? 'inline' : 'none'">This is a test description post.
  This is a test description post.
  This is a test description post.
  This is a test description post.
  This is a test description post.
  This is a test description post.
  </p>
  </div>
</div>
`,
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public show:boolean = true;
  public buttonName:any = "Hide";
  public title:string = "This is the post title"
  ngOnInit () {  }

   hideShow() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}

