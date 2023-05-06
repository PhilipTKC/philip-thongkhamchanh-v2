import { DI } from "aurelia";

import { Repositories, Repository } from "../common/interfaces";


export const IGithubService = DI
    .createInterface<IGithubService>("IGithubService", (x) => x.singleton(GithubService));

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGithubService extends GithubService { }

export class GithubService {
    async retrieveRepositories(username: string): Promise<Repositories> {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        const data = await response.json();

        return await Promise.all(data.map(async (repository: Repository) => {
            return {
                ...repository,
                languages: await this.retrieveRepositoryLanguages(repository.languages_url)
            }
        }));
    }

    // Retrieve Languages
    async retrieveRepositoryLanguages(url: string): Promise<string[]> {
        const response = await fetch(url);
        return await response.json() as Promise<string[]>;
    }
}