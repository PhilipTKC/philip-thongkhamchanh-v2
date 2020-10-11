import { customElement } from "aurelia-framework";
import tippy from "tippy.js";

@customElement("hero")
export default class Hero {
  private readonly age = 27;

  private readonly location = "New Zealand";

  private statusTimeAgo: string;

  // eslint-disable-next-line class-methods-use-this
  attached(): void {
    tippy(document.querySelectorAll(".tjs"));
  }
}
