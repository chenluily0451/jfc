import { platformBrowser } from '@angular/platform-browser';

import { UpstreamLoginModuleNgFactory } from '../../../../compiled/src/app/module/upstream/upstreamLogin.module.ngfactory';

platformBrowser([{provide: 'UserIdentity', useValue: 'bridge' }]).bootstrapModuleFactory(UpstreamLoginModuleNgFactory);
