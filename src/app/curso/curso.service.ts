import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }
  getCursos (){
    return ['java','Ext js','angular']
  }
}
