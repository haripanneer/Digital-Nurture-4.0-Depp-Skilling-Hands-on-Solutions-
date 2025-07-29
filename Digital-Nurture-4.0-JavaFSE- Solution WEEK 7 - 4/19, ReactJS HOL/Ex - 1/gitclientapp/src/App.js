import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState('techiesyed');

  useEffect(() => {
    const gitClient = new GitClient();
    gitClient.getRepositories(username)
      .then(repositories => setRepos(repositories));
  }, [username]);

  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;