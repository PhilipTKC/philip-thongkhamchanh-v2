import { autoinject } from "aurelia-framework";
import FaunaService, { ProjectResponse } from "services/fauna";
import * as nProgress from "nprogress";

@autoinject
export default class Projects {
  private projects: ProjectResponse[];

  constructor(private readonly fauna: FaunaService) {}

  async activate(): Promise<void> {
    nProgress.start();
    // this.projects = (await this.fauna.queryIndex(
    //   "all_projects"
    // )) as ProjectResponse[];
  }

  // eslint-disable-next-line class-methods-use-this
  attached(): void {
    window.scroll(0, 0);
    nProgress.done();
  }
}
