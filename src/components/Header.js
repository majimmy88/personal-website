import React, { useState, useEffect } from 'react';
import profilePicture from '../assets/profilePicture.jpeg';
import LinkedIn from '../assets/linkedin-in-brands.svg';
import Github from '../assets/github-brands.svg';
import Email from '../assets/email.svg';

const Header = () => {
  const [about, setAbout] = useState(false);
  const [tech, setTech] = useState(false);
  const [work, setWork] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    // console.log(scrolled);
    if (scrolled >= 0.02 && scrolled < 0.3) {
      setAbout(true);
      setTech(false);
      setWork(false);
    } else if (scrolled >= 0.3 && scrolled < 0.7) {
      setAbout(false);
      setTech(true);
      setWork(false);
    } else if (scrolled >= 0.7) {
      setAbout(false);
      setTech(false);
      setWork(true);
    }
  };

  return (
    <header className="h-full flex flex-col justify-center items-center lg:h-screen lg:items-end lg:pb-28 lg:pr-20">
      <div className="flex flex-col items-center mb-5 lg:items-end">
        <img
          className="rounded-full h-28 w-28 mb-5"
          src={profilePicture}
          alt="profile"
        />
        <h1 className="text-white font-medium">Jimmy Ma</h1>
        <h1 className="text-white">Software Engineer</h1>
        <ul className="text-gray-200 hidden lg:block lg:flex lg:flex-col lg:items-end lg:my-6">
          <li>
            <div>
              <a href="#about">
                <div className="flex flex-row">
                  <span
                    className={`${
                      about === true
                        ? 'opacity-100'
                        : 'transition-opacity duration-1000 ease-out opacity-70'
                    }`}
                  >
                    About Me
                  </span>
                </div>
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="#technologies">
                <div className="flex flex-row">
                  <span
                    className={`${
                      tech === true
                        ? 'opacity-100'
                        : 'transition-opacity duration-1000 ease-out opacity-70'
                    }`}
                  >
                    Technologies
                  </span>
                </div>
              </a>
            </div>
          </li>

          <li>
            <div>
              <a href="#work">
                <div className="flex flex-row">
                  <span
                    className={`${
                      work === true
                        ? 'opacity-100'
                        : 'transition-opacity duration-1000 ease-out opacity-70'
                    }`}
                  >
                    Work
                  </span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <footer>
        <div className="flex flex-row bg-gray-200 space-x-2 rounded-sm p-2">
          <div className="h-5 w-5">
            <a href="https://www.linkedin.com/in/majimmy88/">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <div className="h-5 w-5">
            <a href="https://github.com/majimmy88">
              <img src={Github} alt="Github" />
            </a>
          </div>
          <div className="h-5 w-5">
            <a href="mailto:majimmy88@gmail.com">
              <img src={Email} alt="Email" />
            </a>
          </div>
        </div>
      </footer>
    </header>
  );
};

export default Header;
