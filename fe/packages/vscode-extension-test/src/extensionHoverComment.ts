// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerHoverProvider(
    'javascript',
    new (class implements vscode.HoverProvider {
      provideHover(
        _document: vscode.TextDocument,
        _position: vscode.Position,
        _token: vscode.CancellationToken
      ): vscode.ProviderResult<vscode.Hover> {
        const commentCommandUri = vscode.Uri.parse(
          `command:editor.action.addCommentLine`
        );
        const contents = new vscode.MarkdownString(
          `[Add comment](${commentCommandUri})`
        );

        // command URIs如果想在Markdown 内容中生效, 你必须设置`isTrusted`。
        // 当创建可信的Markdown 字符, 请合理地清理所有的输入内容
        // 以便你期望的命令command URIs生效
        contents.isTrusted = true;

        return new vscode.Hover(contents);
      }
    })()
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
