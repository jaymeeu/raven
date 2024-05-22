document.getElementById('authForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');
    const gravatarImage = document.getElementById('gravatarImage');
    const reposList = document.getElementById('reposList');
  
    gravatarImage.src = '';
    reposList.innerHTML = '';
  
    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?s=200`;
    gravatarImage.src = gravatarUrl;
    const githubApiUrl = `https://api.github.com/search/users?q=${email}+in:email`;
    const response = await fetch(githubApiUrl);
    const data = await response.json();
  
    if (data.items && data.items.length > 0) {
        const username = data.items[0].login;
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposResponse.json();
  
        repos.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.textContent = repo.name;
            reposList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No repositories found.';
        reposList.appendChild(listItem);
    }
    resultDiv.classList.remove('hidden');
  });
  
  function md5(string) {
    return CryptoJS.MD5(string).toString();
  }
  
  