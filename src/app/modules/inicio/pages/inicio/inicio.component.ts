import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { gestionlogistica } from 'src/app/models/logistica.model'
import { GestionlogisticaService } from 'src/app/services/gestionlogistica.service'
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['TipoProducto', 'CantidadProducto', 'FechaEntrega', 'Bodega', 'PrecioEnvio', 'NumeroFlota','NumeroGuia','TipoGuia'];
  dataSource = new MatTableDataSource<gestionlogistica>();

  constructor( private gestionlogistica: GestionlogisticaService,
    public dialog: MatDialog
  ){}


  ngOnInit(): void {
    this.mostrargestion();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrargestion(){
    this.gestionlogistica.getList().subscribe({
      next:(dataResponse) => { this.showgestion(dataResponse)},
      error:(e)=> {}
    })
  }
  showgestion(datos: Response) {
    console.log(this.dataSource.data);
    this.dataSource.data = datos.objectResponse;
    console.log(datos.objectResponse);
  };

}
