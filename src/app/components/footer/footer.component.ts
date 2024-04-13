import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  hasRoute(route: string){
    console.log(route);
    return this.router.url === route;
  }
}
