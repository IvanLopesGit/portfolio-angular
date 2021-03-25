import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HeaderComponent, BodyComponent, AboutComponent],
  exports: [HeaderComponent, BodyComponent],
  imports: [CommonModule, MatTabsModule],
})
export class ProfileModule {}
