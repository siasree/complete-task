import { Component, OnInit } from '@angular/core';
// import 'rxjs/add/observable/of';


@Component({
  selector: 'app-selfservice',
  templateUrl: './selfservice.component.html',
  styleUrls: ['./selfservice.component.scss']
})

export class SelfserviceComponent implements OnInit {

  allowedTypes: any;


  constructor() { 
     this.allowedTypes = [ 'text/markdown' ];
  }
  onUploadFiles(evt: any) {
    if (evt.error) {
        throw evt.error;
    }

    const files = evt.files;
    // You can run upload script here
  }
  ngOnInit() {
  }

}
