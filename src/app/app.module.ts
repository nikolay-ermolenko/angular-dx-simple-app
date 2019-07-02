import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {
    DxDataGridModule, 
    DxLoadPanelModule, 
    DxToolbarModule, 
    DxTextBoxModule,
    DxNumberBoxModule,
    DxSwitchModule, 
    DxCheckBoxModule, 
    DxButtonModule,
    DxSpeedDialActionModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxScrollViewModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxTagBoxModule
} from 'devextreme-angular';
import { appRoutes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        DxButtonModule,
        DxLoadPanelModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxTagBoxModule,
        DxToolbarModule,
        DxTextBoxModule,
        DxTextAreaModule,
        DxNumberBoxModule,
        DxSelectBoxModule,
        DxSwitchModule,
        DxCheckBoxModule,
        DxSpeedDialActionModule,
        DxPopupModule,
        DxScrollViewModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    providers: [

    ],
    entryComponents: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
