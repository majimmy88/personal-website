import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import OnboardingVid from '../assets/onboarding-vid.mp4';
import emptyProfile from '../assets/empty-profile.png';
import OnboardingOne from '../assets/onboarding-slide-1.png';
import OnboardingTwo from '../assets/onboarding-slide-2.png';
import OnboardingThree from '../assets/onboarding-slide-3.png';
import OnboardingFour from '../assets/onboarding-slide-4.png';
import OnboardingFive from '../assets/onboarding-slide-5.png';
import OnboardingSix from '../assets/onboarding-slide-6.png';
import OnboardingSeven from '../assets/onboarding-slide-7.png';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const slides = [
  OnboardingOne,
  OnboardingTwo,
  OnboardingThree,
  OnboardingFour,
  OnboardingFive,
  OnboardingSix,
  OnboardingSeven,
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const [isObjective, setIsObjective] = useState(false);
  const [isSolution, setIsSolution] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

    if (scrolled < 0.115) {
      setIsObjective(false);
      setIsSolution(false);
    }
    if (scrolled >= 0.115) {
      setIsObjective(true);
    }
    if (scrolled >= 0.6) {
      setIsSolution(true);
    }
  };

  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <NavBar />
      <div className="pt-16 h-screen">
        <header className="relative flex items-center justify-start overflow-hidden w-screen h-96  bg-gray-700 lg:h-screen lg:mb-52">
          <div className="relative w-auto z-30 flex items-center justify-center text-white bg-blue-400 bg-opacity-90 rounded-r p-5 sm:pl-16 text-base sm:text-2xl lg:text-4xl lg:mt-96">
            User Onboarding – Logos News
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 object-cover h-full w-full opacity-75"
          >
            <source src={OnboardingVid} type="video/mp4" />
          </video>
        </header>
        <div className="flex flex-col lg:flex-row lg:mb-52">
          <div
            className={`w-screen h-96 flex flex-col items-center justify-center p-6 lg:h-screen lg:p-16 lg:max-w-xl ${
              isObjective === true ? 'lg:animate-fade-in-right' : 'lg:opacity-0'
            }`}
          >
            <h1 className="text-gray-400 text-xl w-full">Objective</h1>
            <div className="border-b-4 border-gray-200 w-16 mt-5 mb-10 self-start"></div>
            <p className="text-gray-400 text-sm lg:text-base">
              At Logos, we discovered from our analytics that writers who had
              completed their profiles received significantly more views on
              their articles. We were motivated to use methods other then
              sending our users reminders to update their profile. We wanted a
              proactive method to encourage users to fill their profiles prior
              to using all the features on our site.
            </p>
          </div>
          <div
            className={`w-screen h-96 flex items-center justify-center bg-blue-200 lg:h-screen lg:min-w-1/3 ${
              isObjective === true ? 'lg:animate-fade-in-left' : 'lg:opacity-0'
            }`}
          >
            <img
              className="w-44 lg:w-60"
              src={emptyProfile}
              alt="Empty Profile"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse">
          <div
            className={`w-screen h-96 flex flex-col items-center justify-center p-6 my-14 lg:h-screen lg:my-0 lg:p-16 lg:max-w-xl ${
              isSolution === true ? 'lg:animate-fade-in-left' : 'lg:opacity-0'
            }`}
          >
            <h1 className="text-gray-400 text-xl w-full">Solution</h1>
            <div className="border-b-4 border-gray-200 w-16 mt-5 mb-10 self-start"></div>
            <p className="text-gray-400 text-sm lg:text-base">
              We felt the best way to encourage our writers to fill complete
              profiles was by presenting them with a popup when they first sign
              up. When the user's record is created at sign up, it will include
              a record for onboarding. If our records indicate user hasn't been
              onboarded, our onboarding pop-up will execute. When the user
              reaches the last page of the onboarding flow, the record will
              update and the user won't be directed to the onboarding pop-up
              ever again. Since completing the profile is not mandatory and only
              strongly encouraged, if the user skips through the entire
              onboarding flow, it will also update the record and thus never
              show again.
            </p>
          </div>
          <div
            className={`w-screen h-96 flex items-center justify-center bg-blue-200 lg:h-screen lg:min-w-1/3 ${
              isSolution === true ? 'lg:animate-fade-in-right' : 'lg:opacity-0'
            }`}
          >
            <div className="flex flex-col items-center mt-8">
              <div className="text-gray-400">
                {slides.map((slide, index) => {
                  return (
                    <div
                      className={
                        index === current
                          ? 'opacity-100 duration-1000'
                          : 'opacity-0 duration-1000'
                      }
                      key={index}
                    >
                      {index === current && (
                        <div className="h-48 mb-20 w-36 lg:w-64 lg:mb-72">
                          <img src={slide} alt="Onboarding Slides" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row justify-center">
                <div className="flex flex-row items-center pb-4">
                  <HiArrowNarrowLeft
                    className="text-3xl z-10 opacity-20 hover:opacity-100"
                    onClick={prevSlide}
                  />
                  <div className="mx-6 opacity-20">{current + 1}</div>
                  <HiArrowNarrowRight
                    className="text-3xl z-10 opacity-20 hover:opacity-100"
                    onClick={nextSlide}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
