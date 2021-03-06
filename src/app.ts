import { autoinject, PLATFORM } from "aurelia-framework";
import { RouterConfiguration } from "aurelia-router";
import { routes } from "routes";

import "./css/app.css";

import "./css/animation.css";
import "./css/custom-anim.css";
import "./css/nprogress.css";
import "./css/shared.css";

@autoinject
export class App {
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
