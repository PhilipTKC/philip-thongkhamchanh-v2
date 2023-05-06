import { IRouteableComponent } from "@aurelia/router";

import { GithubService, IGithubService } from "../services/github";
import { Repositories } from "../common/interfaces";

import { AnimationHooks } from "../lifecycle-hooks/animation-hooks";

export class Projects implements IRouteableComponent {

    static dependencies = [AnimationHooks];

    private repositories: Repositories;

    constructor(@IGithubService private readonly github: GithubService) { }

    async loading() {
        this.repositories = await this.github.retrieveRepositories('PhilipTKC');

        this.repositories = this.repositories.sort((a, b) => (a.archived > b.archived) ? 1 : -1);

        console.log(this.repositories);

    }
}