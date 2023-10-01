"use client";
import { useEffect, useState, useRef } from "react";
import { joinedDate } from "@utils/formatter";
import Image from "next/image";
import Profile from "./Profile";

const SearchContainer = () => {
  const [empty, setEmpty] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const usernameRef = useRef(null);
  const [user, setUser] = useState("octocat");

  function hadleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      setEmpty(true);
      setUser(null);
      return;
    }

    setEmpty(false);
    fetchUser(usernameRef.current.value);
  }

  async function fetchUser(login) {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();

    if (response.status != 200) {
      setNotFound(true);
      setUser(null);
      return;
    }

    setNotFound(false);

    const userData = {
      pfp: data.avatar_url,
      name: data.name,
      joinedAt: joinedDate(data.created_at),
      username: data.login,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
      twitter: data.twitter_username,
      company: data.company,
      blog: data.blog,
    };
    console.log(data);

    setUser(userData);
  }

  useEffect(() => {
    fetchUser(user);
  }, []);

  return (
    <div>
      <div>
        <div className="input-container mt-8 p-2 rounded-lg bg-primary-bg2 dark:bg-dark-bg2 shadow-[0_20px_50px_-20px_rgba(30,42,71,0.25)]">
          <form
            className="w-full flex justify-between"
            onSubmit={(e) => {
              e.preventDefault();
              hadleSubmit();
            }}
          >
            <div className="flex w-4/5 justify-center items-center ml-2">
              <label>
                <Image src="search-icon.svg" width={20} height={20} />
              </label>
              <input
                ref={usernameRef}
                className="w-full bg-transparent "
                name="username"
                id="username"
                type="text"
                placeholder="Search GitHub username"
              />
              {empty && <small style={{ color: "red" }}>Enter User</small>}
              {notFound && <small style={{ color: "red" }}>Not Found</small>}
            </div>
            <button
              type="submit"
              className="bg-primary-blue text-dark-text1 px-5 py-3 rounded-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <Profile
          user={user}
          pfp={user.pfp}
          name={user.name}
          joinedAt={user.joinedAt}
          username={user.username}
          bio={user.bio}
          repos={user.repos}
          followers={user.followers}
          following={user.following}
          location={user.location}
          twitter={user.twitter}
          company={user.company}
          blog={user.blog}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
