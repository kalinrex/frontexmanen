import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { DatePipe } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Clientes: any[] = [];
  public formCliente: FormGroup;
  public isEdit = false;
  constructor(private fb: FormBuilder, private clienteService: ClienteService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.initFormCliente();
    this.getClientes();
  }
  public initFormCliente (){
    this.formCliente = this.fb.group({
      Id:[0],
      Nombre_Usuario:[null],
      Contrasena:[null],
      Nombre:[null],
      Apellidos:[null],
      Correo_Electronico:[null],
      Edad:[null],
      Estatura:[null],
      Peso:[null],
      IMC:[null],
      GEB:[null],
      ETA:[null],
      Fecha_Creacion:[null],
      Fecha_Actualizacion:[null]
    })
  }

  public getClientes(){
    this.clienteService.getClientes().subscribe((res: any) => {
      this.Clientes = res;
      console.log(this.Clientes);
    })
  }

  public saveChanges(cliente){

    let date = new Date();
    let today = this.datePipe.transform(date, 'yyyy/MM/dd');
    if(cliente.Id === 0){
      cliente.Fecha_Creacion=today;
      cliente.Fecha_Actualizacion=today;
      this.clienteService.save(cliente).subscribe((res: any) => {
        alert(res[0][0].SQLMESSAGE);
        //alert(res)
        this.getClientes();
        this.initFormCliente();
        $("#exampleModal").modal('hide');
      })
    }else{
        let dCreacion = cliente.Fecha_Creacion;
        let Creacion = this.datePipe.transform(dCreacion, 'yyyy/MM/dd');
        cliente.Fecha_Creacion = Creacion;
        cliente.Fecha_Actualizacion=today;
        cliente.Fecha_Actualizacion=today;
        this.clienteService.save(cliente).subscribe((res: any) => {
          $("#exampleModal").modal('hide');
        alert(res[0][0].SQLMESSAGE);
        this.getClientes();
        this.initFormCliente();
      })
    }

  }

  public delete(id){
    console.log(id)
    this.clienteService.delete(id).subscribe((res: any) => {
      console.log(res);
      this.getClientes();
    })
  }

  public passValues(cliente){
    this.formCliente.setValue(cliente);
    this.isEdit = true;
  }
  public resetvalues (){
    this.isEdit = false;
    this.initFormCliente();
  }

}
