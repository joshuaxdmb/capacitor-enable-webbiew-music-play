import { registerPlugin } from '@capacitor/core';

import type { WebViewMusicPlayPluginPlugin } from './definitions';

const WebViewMusicPlay = registerPlugin<WebViewMusicPlayPluginPlugin>('WebViewMusicPlayPlugin', {
  web: () => import('./web').then(m => new m.WebViewMusicPlayPluginWeb()),
});

export * from './definitions';
export { WebViewMusicPlay };
