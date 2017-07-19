import { platformBrowser } from '@angular/platform-browser';

import { PlatformHomeModuleNgFactory } from '../../../../compiled/src/app/module/platform/platformHome.module.ngfactory';

platformBrowser().bootstrapModuleFactory(PlatformHomeModuleNgFactory);
