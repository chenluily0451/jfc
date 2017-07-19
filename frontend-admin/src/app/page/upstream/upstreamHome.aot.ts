import { platformBrowser } from '@angular/platform-browser';

import { UpstreamHomeModuleNgFactory } from '../../../../compiled/src/app/module/upstream/upstreamHome.module.ngfactory';

platformBrowser().bootstrapModuleFactory(UpstreamHomeModuleNgFactory);
