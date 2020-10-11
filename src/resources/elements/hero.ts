import { customElement } from "aurelia-framework";
import tippy from "tippy.js";

@customElement("hero")
export class Hero {
  attached(): void {
    tippy(document.querySelectorAll(".tjs"));
  }
}
