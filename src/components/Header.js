import profilePicture from '../assets/profilePicture.jpeg';
import LinkedIn from '../assets/linkedin-in-brands.svg';
import Github from '../assets/github-brands.svg';
import Google from '../assets/google-brands.svg';

const Header = () => {
  return (
    <header class="bg-fixed bg-hero-pattern bg-left-top h-full flex flex-col justify-center items-center lg:items-end lg:pb-28 lg:pr-10">
      <div class="flex flex-col items-center mb-5 lg:items-end">
        <img
          class="rounded-full h-28 w-28 mb-5"
          src={profilePicture}
          alt="profile"
        />

        <h1 class="text-white font-medium">Jimmy Ma</h1>
        <h1 class="text-gray-300">Software Engineer</h1>
      </div>
      <footer>
        <div class="flex flex-row bg-gray-200 space-x-2 rounded-sm p-1">
          <div class="h-5 w-5">
            <a href="https://www.linkedin.com/in/majimmy88/">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <div class="h-5 w-5">
            <a href="https://github.com/majimmy88">
              <img src={Github} alt="Github" />
            </a>
          </div>
          <div class="h-5 w-5">
            <a href="mailto:majimmy88@gmail.com">
              <img src={Google} alt="Gmail" />
            </a>
          </div>
        </div>
      </footer>
    </header>
  );
};

export default Header;
