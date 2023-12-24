import { WebPlugin } from '@capacitor/core';
import type { WebViewMusicPlayPluginPlugin } from './definitions';
export declare class WebViewMusicPlayPluginWeb extends WebPlugin implements WebViewMusicPlayPluginPlugin {
    setCustomWebViewSettings(): Promise<void>;
}
