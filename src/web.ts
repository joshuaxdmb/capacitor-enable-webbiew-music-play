import { WebPlugin } from '@capacitor/core';

import type { WebViewMusicPlayPluginPlugin } from './definitions';

export class WebViewMusicPlayPluginWeb extends WebPlugin implements WebViewMusicPlayPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
