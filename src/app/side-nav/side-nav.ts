import { Component, AfterViewInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var M: any; // Materialize CSS
@Component({
  selector: 'app-side-nav',
  imports: [RouterLink],
  templateUrl: './side-nav.html',
  styleUrls: ['./side-nav.scss'],
})
export class SideNav implements AfterViewInit {
  @Input() userName = 'Ghislain Z.';
  @Input() userEmail = 'gzeleu@protonmail.com';



  ngAfterViewInit() {
    // Initialize Materialize Sidenav
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }
}
