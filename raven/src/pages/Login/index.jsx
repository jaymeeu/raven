import React, { useState } from 'react'
import "./style.css"
import CryptoJS from 'crypto-js';
import Topnav from '@/components/Topnav'
const Index = () => {

    const [email, setEmail] = useState('');
    const [gravatarUrl, setGravatarUrl] = useState('');
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setGravatarUrl('');
        setRepos([]);
        setError('');

        // Generate Gravatar URL
        const gravatarHash = CryptoJS.MD5(email.trim().toLowerCase()).toString();
        const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?s=200`;
        setGravatarUrl(gravatarUrl);

        // Fetch GitHub user
        const githubApiUrl = `https://api.github.com/search/users?q=${email}+in:email`;
        try {
            const response = await fetch(githubApiUrl);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                const username = data.items[0].login;
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
                const reposData = await reposResponse.json();
                setRepos(reposData);
            } else {
                setError('No repositories found.');
            }
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
            setError('An error occurred while fetching data.');
        }
    };

    return (
        <div>

      <Topnav />

        <div className="login__container">
            <form onSubmit={handleSubmit} id="authForm" className="authForm">
                <div className="title_login">
                    Sign In
                </div>
                <div className='input__container' style={{marginBottom:'20px'}}>
                    <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Email address" type='email' className="input__input" style={{textAlign : 'left'}} />
                </div>
                <button type="submit" className='btn__container'>
                    Login
                </button>

                <div id="result" className="hidden">
                    <div id="gravatar" className="toCenter">
                        <h2>Gravatar</h2>
                        <img src={gravatarUrl} id="gravatarImage" alt="Gravatar" className="gravatarImage"/>
                    </div>
                    <div id="github" className="githubList">
                        <h2>GitHub Repositories</h2>
                        {
                            repos.map((repo)=>(
                                <div>{repo.name}</div>
                            ))
                        }
                        
                    </div>
                </div>

            </form>

        </div>
        </div>

    )
}

export default Index
