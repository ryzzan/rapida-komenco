import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/components/login/auth.service';
import { LogoutConfirmationDialogComponent } from 'src/app/components/logout-confirmation-dialog/logout-confirmation-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  menu = [
    {
      router: '/main/dashboard',
      title: 'Página inicial',
      icon: 'dashboard',
      itens: [],
    }
  ];

  isMenuOpened = true;

  isToLogout: boolean = true;

  constructor(private logoutDialog: MatDialog, private authService: AuthService) {};

  ngOnInit(): void {
  }

  logoutOpenDialog = (): void => {
    const logoutDialogRef = this.logoutDialog.open
    (
      LogoutConfirmationDialogComponent, 
      {
        data: {
          isToLogout: this.isToLogout,
        }
      }
    );

    logoutDialogRef.afterClosed().subscribe(res => {
      if (res) this.logout();
    })
  }

  logout = () => {
    this.authService.logout();
  }
}
