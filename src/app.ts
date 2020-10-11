import { PLATFORM } from "aurelia-pal";
import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { routes } from "app-routes";
import dom from "font-awesome/library";

@autoinject
export class App {
  constructor(private readonly router: Router) {}

  attached(): void {
    dom.watch();
  }

  configureRouter(configuration: RouterConfiguration): void {
    configuration.title = "Philip Thongkhamchanh";
    configuration.options.pushState = true;
    configuration.map(routes);
    configuration.mapUnknownRoutes(() => {
      return {
        moduleId: PLATFORM.moduleName("./pages/not-found"),
        redirect: "/",
        title: "404 - Page Not Found",
      };
    });
  }
}
