import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AfliccionService } from 'src/app/services/afliccion.service';

@Component({
  selector: 'app-afliccion-crud',
  templateUrl: './afliccion-crud.component.html',
  styleUrls: ['./afliccion-crud.component.scss']
})
export class AfliccionCrudComponent implements OnInit {


  form = new FormGroup({
    idPaciente: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private serv: AfliccionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let data = this.form.value;
    this.serv.save(data);
  }

}
