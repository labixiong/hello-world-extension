import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// 注册命令
	let disposable = vscode.commands.registerCommand('hello-world.sayHello', () => {
		// 显示信息框
		vscode.window.showInformationMessage('Hello World from VSCode!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}