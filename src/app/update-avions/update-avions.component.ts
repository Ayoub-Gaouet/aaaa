import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AvionsService } from '../avions.service';
import { Avions } from '../model/avions.model';
@Component({
  selector: 'app-update-Avions',
  templateUrl: './update-avions.component.html',
  styles: []
})
export class UpdateAvionsComponent implements OnInit {
  currentAvions = new Avions();
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private AvionsService: AvionsService) { }

ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.currentAvions = this.AvionsService.consulterAvions(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentAvions);
}
updateAvions() { 
  //console.log(this.currentAvions);
  this.AvionsService.updateAvions(this.currentAvions);
  this.router.navigate(['Avions']);
} 
}
