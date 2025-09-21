import { FrameworkType } from "@/src/types/framework/framework.types";
import { LibraryType } from "@/src/types/library/library.types";

import { githubService } from "../services/githubService";
import { itemService } from "../services/itemServices";

import { extractRepoGitHubUrl } from '../../src/utils/urlUtils';


export type Item = FrameworkType | LibraryType;

export const itemRepository = {
  async getItemByIdAndType(id: number, type: string): Promise<Item | null> {
    const api = itemService();
    const item = await api.getItemByIdAndType(id, type);

    if (!item) return null;

    if(extractRepoGitHubUrl(item.link) == null) return item;

    const apiGithub = new githubService();

    if ("creator" in item && item.creator) {
      const avatar = await apiGithub.getGithubUserAvatar(item.creator);

      if (avatar) {
        return { ...item, avatar };
      }
    }

    return item;
  }
};
