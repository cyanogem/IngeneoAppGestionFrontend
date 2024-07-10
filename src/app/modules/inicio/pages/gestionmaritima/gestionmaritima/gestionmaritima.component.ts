import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { gestionlogistica } from 'src/app/models/logistica.model'
import { MaritimaService } from 'src/app/services/maritima.service'
import { Response } from 'src/app/models/response';
import { Guia } from 'src/app/models/guia.model';
import { FormularioAddEditComponent } from 'src/app/modules/inicio/components/formulario-add-edit/formulario-add-edit.component'

@Component({
  selector: 'app-gestionmaritima',
  templateUrl: './gestionmaritima.component.html',
  styleUrls: ['./gestionmaritima.component.css']
})
export class GestionmaritimaComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['NumeroGuia','Consecutivo','Cliente', 'Bodega', 'TipoGuia','FechaEntrega','Acciones'];
  dataSource = new MatTableDataSource<gestionlogistica>();

  constructor( private maritimagestion: MaritimaService,
    public dialog: MatDialog
  ){}


  ngOnInit(): void {
    this.mostrarmaritima();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarmaritima(){
    this.maritimagestion.getList().subscribe({
      next:(dataResponse) => { this.showgestion(dataResponse)},
      error:(e)=> {}
    })
  }
  showgestion(datos: Response) {
    this.dataSource.data = datos.objectResponse;
    console.log(this.dataSource.data);
  };

  NuevoGuia() {
    this.dialog.open(FormularioAddEditComponent,{
      disableClose:true,
      width:"350px",

    }).afterClosed().subscribe(resultado =>
      {
        if(resultado === "Creado"){
          this.mostrarmaritima();
        }
      }
    )
  }
  editarGuia(dataGuia: Guia) {
    this.dialog.open(FormularioAddEditComponent,{
      disableClose:true,
      width:"350px",
      data: dataGuia

    }).afterClosed().subscribe(resultado =>
      {
        if(resultado === "editado"){
          this.mostrarmaritima();
        }
      }
    )
  }


}
