'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const WebViewMusicPlay = core.registerPlugin('WebViewMusicPlayPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.WebViewMusicPlayPluginWeb()),
});

class WebViewMusicPlayPluginWeb extends core.WebPlugin {
    async setCustomWebViewSettings() {
        console.log('Not supported or needed on web');
        return;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    WebViewMusicPlayPluginWeb: WebViewMusicPlayPluginWeb
});

exports.WebViewMusicPlay = WebViewMusicPlay;
//# sourceMappingURL=plugin.cjs.js.map
