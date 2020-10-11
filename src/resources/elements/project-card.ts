import { customElement, bindable } from "aurelia-framework";

@customElement("project-card")
export class ProjectCard {
  @bindable projects: any;
}
