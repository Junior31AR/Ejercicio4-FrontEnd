import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento.model';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private medicamentoService:MedicamentoService) { }

  medicamento : Medicamento = {};

  saveMedicamento(){
    console.log("Se realizo el metodo save Medicamento");
    console.log(this.medicamento);

    this.medicamentoService.create(this.medicamento).subscribe(
        response =>{
            console.log(response.mensaje);
            alert(response.mensaje)
        },
        error =>{
            alert(error);
        },
    );
  }

  ngOnInit(): void {
  }

}
