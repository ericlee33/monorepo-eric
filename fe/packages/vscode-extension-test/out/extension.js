"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = exports.SidebarProvider = void 0;
const vscode = require("vscode");
class SidebarProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView) {
        this._view = webviewView;
        webviewView.webview.options = {
            // 在 webview 允许脚本
            enableScripts: true,
            localResourceRoots: [this._extensionUri],
        };
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }
    revive(panel) {
        this._view = panel;
    }
    _getHtmlForWebview(webview) {
        // Use a nonce to 只允许特定脚本运行.
        return `<!DOCTYPE html>
		<html lang="en">
		<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script>
                  const tsvscode = acquireVsCodeApi(); //内置函数，可以访问 VS Code API 对象
                  const apiBaseUrl = 'https://cnodejs.org/'
                </script>
                </head>
              <body>
                  <div id="root" style="color: #666">测试webview</div>
              </body>
	</html>`;
    }
}
exports.SidebarProvider = SidebarProvider;
function activate(context) {
    const sidebarPanel = new SidebarProvider(context.extensionUri);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider('vs-sidebar-view', sidebarPanel));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map