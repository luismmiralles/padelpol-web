import { environment } from "src/environments/environment";

export const config = {
    apiUrl: environment.production ? 'http://url-produccion/api' : 'http://padelpol.herokuapp.com/api'
}