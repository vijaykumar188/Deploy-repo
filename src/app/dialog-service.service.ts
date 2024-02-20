import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

constructor(private dialog:MatDialog) {}

openPopup(): void {
  this.dialog.open(ConfirmPopupComponent, {
    width: '400px', // Set the desired width
  });
}
}

