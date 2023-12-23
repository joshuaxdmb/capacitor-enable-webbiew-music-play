import Foundation

@objc public class WebViewMusicPlayPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
