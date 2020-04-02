import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SunriseplatformproductSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SunriseplatformproductSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class SunriseplatformproductHomeModule {}
