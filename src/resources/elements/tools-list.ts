import { customElement } from "aurelia-framework";

@customElement("tools-list")
export class ToolsList {
  tools: any;

  attached(): void {
    this.tools = [
      {
        title: "Visual Studio Code",
        src: "vscode.svg",
        url: "https://code.visualstudio.com",
      },
      {
        title: "Aurelia",
        src: "aurelia.svg",
        url: "https://github.com/aurelia/aurelia",
      },
      {
        title: "Netlify",
        src: "netlify.svg",
        url: "https://netlify.com",
      },
    ];
  }
}
