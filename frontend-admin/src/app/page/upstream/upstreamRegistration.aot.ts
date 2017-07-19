import { platformBrowser } from '@angular/platform-browser';

import { UpstreamRegistrationModuleNgFactory } from '../../../../compiled/src/app/module/upstream/upstreamRegistration.module.ngfactory';

platformBrowser([{provide: 'UserIdentity', useValue: 'upstream' }]).bootstrapModuleFactory(UpstreamRegistrationModuleNgFactory);
