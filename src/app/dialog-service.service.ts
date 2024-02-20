import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

constructor(private dialog:MatDialog) {}

openPopup() {
let dialogRef:MatDialogRef<ConfirmPopupComponent>;
dialogRef = this.dialog.open(ConfirmPopupComponent);
return dialogRef.afterClosed();

  // this.dialog.open(ConfirmPopupComponent, {
  //   width: '400px', // Set the desired width
  // });
}
}

