import * as vscode from 'vscode';

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;
  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      // 在 webview 允许脚本
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
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

export function activate(context: vscode.ExtensionContext) {
  const sidebarPanel = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('vs-sidebar-view', sidebarPanel)
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
