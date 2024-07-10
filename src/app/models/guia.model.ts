export interface Guia {
  guiaId : number,
  clienteId : number,
  cliente : string,
  fechaEntrega: string,
  bodegaId: number,
  bodega: string,
  tipoGuiaId: number,
  tipoGuia: string,
  consecutivo: string,
  numeroGuia: string
}
export class Response {
  public objectResponse: any = "";
  public success: boolean = true;
  public errorDetails: Error = new Error();
}
