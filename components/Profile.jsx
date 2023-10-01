import Image from "next/image";
import { FaLink, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";

const Profile = ({
  user,
  pfp,
  name,
  joinedAt,
  username,
  bio,
  repos,
  followers,
  following,
  location,
  twitter,
  company,
  blog,
}) => {
  return (
    <div className="lg:flex mt-8 p-6 rounded-lg bg-primary-bg2 dark:bg-dark-bg2 shadow-[0_20px_50px_-20px_rgba(30,42,71,0.25)]">
      <div className="hidden lg:flex justify-center ">
        <div className="rounded-full h-full pr-5 w-4/5 mt-6">
          <Image src="profile-image.svg" width={130} height={130} />
          {/* {!user === "" ? (
            <Image src="profile-image.svg" width={100} height={100} />
          ) : (
            <img src={pfp} />
          )} */}
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="flex w-full my-5">
          <div className="rounded-full h-full pr-5 lg:hidden">
            {user === "" ? (
              <Image src="profile-image.svg" width={100} height={100} />
            ) : (
              <img src={pfp} width="100" height="100" />
            )}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-primary-textBold dark:text-dark-text1 font-bold text-2xl ">
                {name}
              </h2>
              <a href="" className="text-primary-blue">
                @{username}
              </a>
            </div>
            <p className=" dark:text-dark-text1">Joined {joinedAt}</p>
          </div>
        </div>
        <div className="dark:text-dark-text1 my-10">
          <p>{bio}</p>
        </div>
        <div className="flex justify-between dark:text-dark-text1 p-6 rounded-lg bg-primary-bg1 dark:bg-dark-bg1 w-full">
          <div className="flex flex-col justify-center items-center">
            <p>Repos</p>
            <p className="font-bold">{repos}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Followers</p>
            <p className="font-bold">{followers}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Following</p>
            <p className="font-bold">{following}</p>
          </div>
        </div>
        <div className="dark:text-dark-text1 lg:flex m-3 justify-between">
          <div>
            <div className="m-3 flex gap-2 items-center">
              <FaLocationDot />
              {location === null ? (
                <p className="text-primary-text1">Not Avaliable</p>
              ) : (
                <p>{location}</p>
              )}
            </div>
            <div className="m-3 flex gap-2 items-center">
              <FaLink />
              {blog === null ? (
                <p className="text-primary-text1">Not Avaliable</p>
              ) : (
                <a href="#">{blog}</a>
              )}
            </div>
          </div>
          <div>
            <div className="m-3 flex gap-2 items-center">
              <FaTwitter />
              {twitter === null ? (
                <p className="text-primary-text1">Not Avaliable</p>
              ) : (
                <a href="#">{twitter}</a>
              )}
            </div>
            <div className="m-3 flex gap-2 items-center">
              <HiBuildingOffice2 />
              {company === null ? (
                <p className="text-primary-text1">Not Avaliable</p>
              ) : (
                <p>{company}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
