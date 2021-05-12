import profilePicture from '../assets/profilePicture.jpeg';
import LinkedIn from '../assets/linkedin-in-brands.svg';
import Github from '../assets/github-brands.svg';
import Email from '../assets/email.svg';

const Header = () => {
  return (
    <header className="h-full flex flex-col justify-center items-center lg:h-screen lg:items-end lg:pb-28 lg:pr-10">
      <div className="flex flex-col items-center mb-5 lg:items-end">
        <img
          className="rounded-full h-28 w-28 mb-5"
          src={profilePicture}
          alt="profile"
        />
        <h1 className="text-white font-medium">Jimmy Ma</h1>
        <h1 className="text-gray-300">Software Engineer</h1>
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
