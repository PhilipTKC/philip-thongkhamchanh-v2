import FaunaService, { ProjectResponse } from "services/fauna";
import { autoinject } from "aurelia-framework";
import * as nProgress from "nprogress";

@autoinject
export default class CustomerProjects {
  private projects: ProjectResponse[];

  constructor(private readonly fauna: FaunaService) {}

  async activate(): Promise<void> {
    nProgress.start();
    // this.projects = (await this.fauna.queryIndex(
    //   "all_customer_projects"
    // )) as ProjectResponse[];
  }

  // eslint-disable-next-line class-methods-use-this
  attached(): void {
    window.scroll(0, 0);
    nProgress.done();
  }
}
