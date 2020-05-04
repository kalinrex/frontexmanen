import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const url = environment.rootUrl;
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public getClientes(){
    return this.http.get(url+'Clientes').pipe(map(res => res));
  }
  public save(cliente){
    if(cliente.Id === 0 || cliente.Id !== null){
      return this.http.post(url+'Cliente', cliente).pipe(map(res => res))
    }else{
      return this.http.put(url+`Cliente/${cliente.Id}`, cliente).pipe(map(res => res))
    }
  }
  public delete(id){
    return this.http.delete(url+`deleteCliente/${id}`).pipe(map(res => res))
  }
}
