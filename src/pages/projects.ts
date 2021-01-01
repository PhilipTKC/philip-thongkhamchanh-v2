import { autoinject } from "aurelia-framework";
import { FaunaService, ProjectResponse } from "services/fauna";
import * as nProgress from "nprogress";

@autoinject
export class Projects {
  private projects: ProjectResponse[];

  constructor(private readonly fauna: FaunaService) {}

  async activate(): Promise<void> {
    nProgress.start();
  }

  attached(): void {
    window.scroll(0, 0);
    nProgress.done();
  }
}
