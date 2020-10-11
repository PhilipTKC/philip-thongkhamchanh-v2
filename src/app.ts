import { PLATFORM } from "aurelia-pal";
import { autoinject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import routes from "app-routes";
import dom from "font-awesome/library";

@autoinject
export default class App {
  constructor(private readonly router: Router) {}

  // eslint-disable-next-line class-methods-use-this
  attached(): void {
    dom.watch();
  }

  // eslint-disable-next-line class-methods-use-this
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
