import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { SchoolListComponent } from './school-list/school-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core';
import { MatTableModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatDividerModule } from '@angular/material';
import { EcmReportComponent } from './ecm-report/ecm-report.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ImageModalComponent } from './ecm-report/image-modal/image-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DownloadReportComponent } from './download-report/download-report.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ReportComponent,
    SchoolListComponent,
    EcmReportComponent,
    ImageModalComponent,
    DownloadReportComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    NgxSpinnerModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
    CoreModule,
    MatPaginatorModule,
    ReportRoutingModule

  ],
  entryComponents: [ImageModalComponent],

  providers: [
  ],
  //   entryComponents: [ConfirmModalComponent]
})
export class ReportModule { }
