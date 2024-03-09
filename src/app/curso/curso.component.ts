import {Component, OnInit} from "@angular/core";
import {CursoService} from "./curso.service";

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {
  nomePortal: string
  cursos: string [] = []
  constructor(private cursosService:CursoService) {
  this.nomePortal = 'http://loiane.training'

  }
}
