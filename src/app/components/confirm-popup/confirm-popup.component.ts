import { Component, Inject, OnInit } from '@angular/core';

import {

MatDialog,

MAT_DIALOG_DATA,

MatDialogTitle,

MatDialogContent,

MatDialogRef

} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
  onNoClick() {

    this.dialogRef.close(false)
    
    }
    
    onYesClick() {
    
    this.dialogRef.close(true);
    
    }
}
