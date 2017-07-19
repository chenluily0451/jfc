import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UpstreamRegistrationModule } from '../../module/upstream/upstreamRegistration.module';
import { environment } from '../../../environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic([{provide: 'UserIdentity', useValue: 'bridge' }]).bootstrapModule(UpstreamRegistrationModule);
