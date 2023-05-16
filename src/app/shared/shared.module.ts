import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedService } from './services/shared.service';
import { ApiUrlService } from './services/api-url.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent, FooterComponent,MaterialModule],
  providers: [SharedService,
  ApiUrlService
]
})
export class SharedModule { }
