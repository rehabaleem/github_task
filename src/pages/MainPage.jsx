import React from "react";
import GitHubInfo from "../components/githubinfo/GithubInfo";
import GithubRepo from "../components/githubRepo/GithubRepo";

export default function MainPage() {
  return (
    <>
      <h1>Github User Information</h1>
      <GitHubInfo />
      <GithubRepo />
    </>
  );
}
