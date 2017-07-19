import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UpstreamLoginModule } from '../../module/upstream/upstreamLogin.module';
import { environment } from '../../../environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic([{provide: 'UserIdentity', useValue: 'platform' }]).bootstrapModule(UpstreamLoginModule);
