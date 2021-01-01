import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName("./components/quick-links.html"),
    PLATFORM.moduleName("./components/project-card"),
    PLATFORM.moduleName("./components/tools-list"),
  ]);
}
