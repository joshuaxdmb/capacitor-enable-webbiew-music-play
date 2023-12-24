import { registerPlugin } from '@capacitor/core';
const WebViewMusicPlay = registerPlugin('WebViewMusicPlayPlugin', {
    web: () => import('./web').then(m => new m.WebViewMusicPlayPluginWeb()),
});
export * from './definitions';
export { WebViewMusicPlay };
//# sourceMappingURL=index.js.map