import {IRepoInfo} from "../shared/exports";

export class DataTransformService {
  constructor(){

  }
  repos: Array<IRepoInfo> = [];

  transformRepos(repos: Array<any>): Array<IRepoInfo>{
    let transformedRepo: IRepoInfo;
    return  repos.map((repo) => {
      transformedRepo = {} as IRepoInfo;
      transformedRepo.avatar_url = repo.owner.avatar_url;
      transformedRepo.size = repo.size;
      transformedRepo.html_url = repo.html_url;
      transformedRepo.login = repo.owner.login;
      transformedRepo.name = repo.name;
      transformedRepo.watchers = repo.watchers;
      return transformedRepo;
    });
  }

  setRepos(userRepos: Array<any>){
    this.repos = this.transformRepos(userRepos);
    return this.repos;
  }
}
