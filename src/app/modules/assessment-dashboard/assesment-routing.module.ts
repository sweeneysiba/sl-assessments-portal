import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentDashboardComponent } from './assessment-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AssessmentDashboardComponent,
    children: [
      {
        path: 'parent',
        loadChildren: '../parent-interview/parent-interview.module#ParentInterviewModule'
      },
      {
        path: 'report',
        // data: { programId: progId, assessmentId: assId},

        loadChildren: '../report/report.module#ReportModule'
      },
      {
        path: 'configuration',
        loadChildren: '../configuration/configuration.module#ConfigurationModule'
      },
      {
        path: 'operations',
        loadChildren: '../operations/operations.module#OperationsModule'

      },
      {
        path: '',
        redirectTo: 'configuration',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'operations',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule {
  constructor(){
  }
 }
