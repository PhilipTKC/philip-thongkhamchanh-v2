import { RouteConfig } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

const routes: RouteConfig[] = [
  {
    moduleId: PLATFORM.moduleName("pages/home"),
    name: "home",
    route: "",
    title: "Home",
  },
  {
    moduleId: PLATFORM.moduleName("pages/projects"),
    name: "projects",
    route: "projects",
    title: "Personal Projects",
  },
  {
    moduleId: PLATFORM.moduleName("pages/customer-projects"),
    name: "customer-projects",
    route: "projects/customers",
    title: "Customer Projects",
  },
];

export { routes };
