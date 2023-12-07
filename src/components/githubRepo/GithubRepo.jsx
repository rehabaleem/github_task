import React, { useEffect, useState } from "react";
import RepoItem from "./RepoItem";
const GitHubInfo = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/rehabaleem/repos"
      );
      const data = await response.json();
      console.log(data);
      setUserData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="repo-title">Repositories</h2>
      <div className="repo-row">
        {" "}
        {userData.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default GitHubInfo;
