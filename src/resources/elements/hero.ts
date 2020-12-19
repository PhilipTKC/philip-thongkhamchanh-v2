import tippy from "tippy.js";

export class HeroCustomElement {
  attached(): void {
    tippy(document.querySelectorAll(".tjs"));
  }
}
