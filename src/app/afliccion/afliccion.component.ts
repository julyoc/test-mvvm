import { Component, OnInit } from '@angular/core';
import { Afliccion } from '../models/afliccion';
import { AfliccionService } from '../services/afliccion.service';

@Component({
  selector: 'app-afliccion',
  templateUrl: './afliccion.component.html',
  styleUrls: ['./afliccion.component.scss']
})
export class AfliccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
