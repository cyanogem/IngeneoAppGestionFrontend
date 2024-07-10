import { Component, Inject, OnInit, inject } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { Guia, Response } from 'src/app/models/guia.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Bodega } from 'src/app/models/bodega.model';
import { TipoGuia } from 'src/app/models/tipoguia.model';
import { MaritimaService } from 'src/app/services/maritima.service';

@Component({
  selector: 'app-formulario-add-edit',
  templateUrl: './formulario-add-edit.component.html',
  styleUrls: ['./formulario-add-edit.component.css']
})
export class FormularioAddEditComponent implements OnInit {
  formGuia: FormGroup
  tituloAccion: string = "Nuevo";
  botonAccion: string = "Guardar";
  ListaTipoguia: TipoGuia[] = [];
  Listabodega: Bodega[] = [];
  Listacliente: Cliente[] = [];

  constructor(
    private dialogoReferencia: MatDialogRef<FormularioAddEditComponent>,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _maritimaServicio: MaritimaService,
    @Inject(MAT_DIALOG_DATA) public dataGuia: Guia
  ) {
    this.formGuia = this.fb.group({
      clienteId: ['',Validators.required],
      bodegaId: ['',Validators.required],
      tipoGuiaId: ['',Validators.required],
      consecutivo: ['',Validators.required],
      numeroGuia: ['',Validators.required]
  })
  console.log(this.formGuia);
  this._maritimaServicio.getListCliente().subscribe({
    next:(data) => {
      this.showCliente(data);
    },error:(e)=>{}
  })

  this._maritimaServicio.getListBodega().subscribe({
    next:(data) => {
      this.showBodega(data);
    },error:(e)=>{}
  })

  this._maritimaServicio.getListTipoGuia().subscribe({
    next:(data) => {
      this.showTipoGuia(data);
    },error:(e)=>{}
  })

}
showCliente(datos: Response) {
  this.Listacliente = datos.objectResponse;
};
showBodega(datos: Response) {
  this.Listabodega = datos.objectResponse;
};
showTipoGuia(datos: Response) {
  this.ListaTipoguia = datos.objectResponse;
};

mostrarAlerta(message: string, accion: string) {
  this._snackBar.open(message, accion,{
    horizontalPosition:"center",
    verticalPosition:"top",
    duration: 3000
  });
}

addEditFunko(){
  const modelo : Guia ={
    guiaId: this.dataGuia.guiaId,
    consecutivo : this.formGuia.value.consecutivo,
    numeroGuia : this.formGuia.value.numeroGuia,
    fechaEntrega : this.formGuia.value.fechaEntrega,
    clienteId : this.formGuia.value.clienteId,
    cliente : "vacio",
    bodegaId : this.formGuia.value.bodegaId,
    bodega : "vacio",
    tipoGuiaId : this.formGuia.value.tipoGuiaId,
    tipoGuia : "vacio"
  }

  if(this.dataGuia == null){
    this._maritimaServicio.addguia(modelo).subscribe({
      next:(data)=>{
        this.mostrarAlerta("La Guia fue creada Exitosamente","Listo");
        this.dialogoReferencia.close("Creado");
      },error:(e)=>{
        this.mostrarAlerta("La Guia no fue Creado","Error");
      }
    })
  }else{
    console.log(this.dataGuia + "Editar funcion")
    this._maritimaServicio.updateguia(modelo).subscribe({

      next:(data)=>{
        this.mostrarAlerta("La Guia fue Actualizado Exitosamente","Listo");
        this.dialogoReferencia.close("editado");
      },error:(e)=>{
        this.mostrarAlerta("La Guia no fue actualizado","Error");
      }
    })
  }

}

  ngOnInit(): void {
    if(this.dataGuia){
      this.formGuia.patchValue({
        clienteId: this.dataGuia.clienteId,
        bodegaId: this.dataGuia.bodegaId,
        tipoGuiaId: this.dataGuia.tipoGuiaId,
        fechaEntrega: this.dataGuia.fechaEntrega,
        consecutivo: this.dataGuia.consecutivo,
        numeroGuia: this.dataGuia.numeroGuia,
      })
      this.tituloAccion="Editar";
      this.botonAccion="Actualizar"
    }
  }

}
