import { customElement, bindable } from "aurelia-framework";

@customElement("project-card")
export default class ProjectCard {
  @bindable projects;
}
