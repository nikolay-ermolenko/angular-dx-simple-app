import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err: any) => console.log(err));

(window as any).setCisStubUser = function(id: number): void {
    localStorage.setItem('stubUserId', id.toString());
    location.reload();
};
