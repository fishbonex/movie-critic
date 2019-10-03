import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUiModule } from '@mc/common/ui';
import { SidenavLayoutComponent } from './components/sidenav-layout/sidenav-layout.component';
import { TopnavLayoutComponent } from './components/topnav-layout/topnav-layout.component';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';

@NgModule({
  imports: [CommonModule, CommonUiModule],
  declarations: [SidenavLayoutComponent, TopnavLayoutComponent, LayoutContainerComponent, LayoutHeaderComponent, LayoutFooterComponent]
})
export class CoreLayoutModule {}
