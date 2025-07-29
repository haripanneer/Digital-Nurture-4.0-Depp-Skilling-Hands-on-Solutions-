import GitClient from './GitClient';
import axios from 'axios';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    // Mock axios response
    const mockRepos = [
      { name: 'repo1' },
      { name: 'repo2' },
      { name: 'repo3' }
    ];
    axios.get.mockResolvedValue({ data: mockRepos });

    // Test the client
    const client = new GitClient();
    const repos = await client.getRepositories('techiesyed');

    // Verify
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/techiesyed/repos'
    );
    expect(repos).toEqual(['repo1', 'repo2', 'repo3']);
  });

  test('should handle errors gracefully', async () => {
    // Mock error
    axios.get.mockRejectedValue(new Error('Network error'));

    const client = new GitClient();
    const repos = await client.getRepositories('invaliduser');

    expect(repos).toEqual([]);
  });
});