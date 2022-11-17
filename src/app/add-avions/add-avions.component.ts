import { Component, OnInit } from '@angular/core';
import { Avions } from '../model/avions.model';
import { AvionsService } from '../avions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-avions',
  templateUrl: './add-avions.component.html',
  styleUrls: ['./add-avions.component.css']
})
export class AddAvionsComponent implements OnInit {
  newAvions = new Avions();

  constructor(private AvionsService: AvionsService , private router :Router) { }

  
  addAvions(){
    //console.log(this.newAvions);
    this.AvionsService.ajouterAvions(this.newAvions);
    this.router.navigate(['Avions']);
  }
  ngOnInit(): void {
  }
}
