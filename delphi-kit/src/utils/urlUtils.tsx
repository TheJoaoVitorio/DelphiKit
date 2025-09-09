
export const extractRepoGitHubUrl = (urlGitHub: string): string | null => {
    if(!urlGitHub){
        return null;
    }

    try{
        const url = new URL(urlGitHub);
        if(url.hostname !== 'github.com'){
            return null;
        }

        const path = url.pathname;
        return path.substring(1);
    }catch{ 
        return null;
    }
}