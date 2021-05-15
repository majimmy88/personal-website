import NavBar from '../components/NavBar';
import OnboardingVid from '../assets/onboarding-vid.mp4';
import emptyProfile from '../assets/empty-profile.png';

const Onboarding = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16 h-screen overflow-y-scroll">
        <header className="relative flex items-center justify-start overflow-hidden w-screen h-96 max-h-1/2 lg:mb-14">
          <div className="relative w-auto z-30 flex items-center justify-center text-white text-xl bg-blue-400 bg-opacity-90 rounded-r pl-16 p-5">
            User Onboarding - Logos News
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 object-cover h-full w-full md:object-contain"
          >
            <source src={OnboardingVid} type="video/mp4" />
          </video>
        </header>

        <div className="flex flex-col lg:flex-row lg:mb-10">
          <div className="w-screen h-96 flex flex-col items-center justify-center bg-grey-100 p-5 lg:max-w-md lg:animate-fade-in-right">
            <h1 className="text-gray-400 text-xl">Objective</h1>
            <p className="text-gray-400">
              At Logos, we discovered from our analytics that writers who had
              completed their profiles received significantly more views on
              their articles. Additionally, we were motivated to use methods
              other then sending our users reminders to update their profile.
            </p>
          </div>
          <div className="w-screen h-96 flex items-center justify-center bg-blue-200 lg:min-w-1/3 lg:animate-fade-in-left">
            <img
              className="rounded w-44"
              src={emptyProfile}
              alt="Empty Profile"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse">
          <div className="w-screen h-96 flex flex-col items-center justify-center bg-grey-100 p-5 lg:max-w-md lg:animate-fade-in-left">
            <h1 className="text-gray-400 text-xl">Solution</h1>
            <p className="text-gray-400">
              We felt the best way to persuade our writers to fill complete
              profiles was by presenting them with a popup when they first sign
              up. When the user's record is created, it will include a boolean
              to check whether they have completed the onboarding flow yet. If
              the user enters our site with the boolean set to false, our
              onboarding pop-up will execute. When the user reaches the last
              page of the onboarding flow, the boolean will switch to true and
              the user will never be directed to the onboarding pop-up ever
              again. Since completing the profile is not mandatory and only
              strongly encourged, if the user skips through the entire
              onboarding flow, it will also trigger the boolean to true and thus
              never show again.
            </p>
          </div>
          <div className="w-screen h-96 flex items-center justify-center bg-blue-200 lg:min-w-1/3 lg:animate-fade-in-right">
            <img
              className="rounded w-44"
              src={emptyProfile}
              alt="Empty Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
