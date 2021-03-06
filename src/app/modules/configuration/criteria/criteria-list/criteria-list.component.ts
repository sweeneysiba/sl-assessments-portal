import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/core/services/configuration-service/configuration.service';
import {  MatSnackBar } from '@angular/material';
import { UtilityService } from 'src/app/core';

@Component({
  selector: 'app-criteria-list',
  templateUrl: './criteria-list.component.html',
  styleUrls: ['./criteria-list.component.scss']
})
export class CriteriaListComponent implements OnInit {
  criterias;
  headings ='headings.criteriaList';
  constructor(private snackBar :MatSnackBar,private utility :UtilityService,private configurationService : ConfigurationService) {
    this.getCriteria();
  } 

  ngOnInit() {
    this.utility.loaderShow();
  }
  getCriteria(){
    this.configurationService.getCriteria().subscribe( data => {
      this.criterias = data['result']['criteria'];
      this.utility.loaderHide();
    },(error)=>{
      this.snackBar.open(error['message'], "Ok", { duration: 9000 });

    }
    )
  }
  
}
