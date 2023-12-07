import React, { useEffect, useState } from "react";
import "./githubinfo.css";
const GitHubInfo = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/rehabaleem");

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div class="info-card">
      <img src={userData.avatar_url} alt="User Avatar" />
      <div class="info-card_container">
        <p>Username: {userData.login}</p>
        <p>Name: {userData.name}</p>
        <p>Bio: {userData.bio}</p>
        <p>Followers: {userData.followers}</p>
      </div>
    </div>
  );
};

export default GitHubInfo;
