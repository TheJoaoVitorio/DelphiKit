
export class githubService {
  async getGithubUserAvatar(username: string): Promise<string | null> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }
      const data = await response.json();
      return data.avatar_url || null;
    } catch (error) {
      console.error('Erro ao buscar avatar:', error);
      return null;
    }
  }
}