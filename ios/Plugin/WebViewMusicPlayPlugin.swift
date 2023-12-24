import Foundation
import Capacitor

@objc(WebViewMusicPlayPluginPlugin)
public class WebViewMusicPlayPluginPlugin: CAPPlugin {
    private let implementation = WebViewMusicPlay()

    @objc func setCustomWebViewSettings(_ call: CAPPluginCall) {
        if let viewController = bridge?.viewController as? CAPBridgeViewController,
            let webView = viewController.webView {
            let result = implementation.setCustomWebViewSettings(webView)
            call.resolve(["value": result])
            }
         else {
            call.reject("Unable to access the web view")
        }
    }

    override public func load() {
        if let viewController = bridge?.viewController as? CAPBridgeViewController,
            let webView = viewController.webView {
            let result = implementation.setCustomWebViewSettings(webView)
            print("WebViewMusicPlayPluginPlugin loaded. Configuration: ", result)
            }
         else {
            print("Unable to access the web view")
        }
    }

}
