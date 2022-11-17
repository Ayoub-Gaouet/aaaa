import { Component, OnInit } from '@angular/core';
import { Avions } from '../model/avions.model';
import { AvionsService } from '../avions.service';
@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
  styleUrls: ['./avions.component.css']
})
export class AvionsComponent implements OnInit {
  Avions : Avions[];
  constructor(private AvionsService: AvionsService ) {
    this.Avions = AvionsService.listeAvions();
    }

  ngOnInit(): void {
  }
  supprimerAvions(A: Avions)
  {
    //console.log(A);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.AvionsService.supprimerAvions(A);
  }

}
