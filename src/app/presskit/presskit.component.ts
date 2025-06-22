import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-presskit',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './presskit.component.html',
  styleUrl: './presskit.component.scss'
})
export class PresskitComponent {

}
