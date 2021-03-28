import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    AboutComponent,
    ExperienceComponent,
  ],
  exports: [HeaderComponent, BodyComponent],
  imports: [CommonModule, MatTabsModule, MatButtonModule, ScrollingModule],
})
export class ProfileModule {}
