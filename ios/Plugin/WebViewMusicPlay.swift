import Foundation
import WebKit

@objc public class WebViewMusicPlay: NSObject {
    @objc public func setCustomWebViewSettings(_ webView: WKWebView) -> Bool {
        webView.configuration.allowsInlineMediaPlayback = true
        return true
    }
}
