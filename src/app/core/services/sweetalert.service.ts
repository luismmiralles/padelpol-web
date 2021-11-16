import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  warning(title: string, subtitle?: string){
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: subtitle
    })
  }
  
  success(title: string, subtitle?: string){
    return Swal.fire({
      icon: 'success',
      title: title,
      text: subtitle
    })
  }

  error(title: string, subtitle?: string){
    return Swal.fire({
      icon: 'error',
      title: title,
      text: subtitle
    })
  }
 
  showAPIErrors(response: { error?: object }) {
    const messages = Object.values(response.error || {}).reduce((sol, element) => {
      sol = sol.concat(element);
      return sol;
    }, []); //sol es un acumulador y 
    //para la primera iteracion sol es un array vacio [], luego sol almacena cada element ya que lo devuelve en el return

    if(messages.lenght == 0) messages.push("Error inesperado");
    return this.error(messages.join("\n"));
    
  }
}
