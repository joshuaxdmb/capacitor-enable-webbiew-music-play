import { WebPlugin } from '@capacitor/core';

import type { WebViewMusicPlayPluginPlugin } from './definitions';

export class WebViewMusicPlayPluginWeb extends WebPlugin implements WebViewMusicPlayPluginPlugin {
  async setCustomWebViewSettings(): Promise<void> {
    console.log('Not supported or needed on web');
    return;
  }
}
