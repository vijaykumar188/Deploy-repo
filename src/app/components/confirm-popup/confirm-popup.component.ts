import { Component, Inject, OnInit } from '@angular/core';

import{MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmPopupComponent>) {}

  ngOnInit(): void {}
  close() {

    this.dialogRef.close()
    
    }
    
    onYesClick() {
    
    this.dialogRef.close(true);
    
    }

    onNoClick(){
      
    }
}
