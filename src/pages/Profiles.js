import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import ProfilesVid from '../assets/profiles-vid.mp4';
import OldProfiles from '../assets/old-profiles.png';
import ProfileDesktop from '../assets/profile-desktop.mp4';
import ProfileTablet from '../assets/profile-tablet.mp4';
import ProfileMobile from '../assets/profile-mobile.mp4';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const slides = [
  { video: ProfileMobile, title: 'Mobile' },
  { video: ProfileTablet, title: 'Tablet' },
  { video: ProfileDesktop, title: 'Desktop' },
];

const Profiles = () => {
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
        <header className="relative flex items-center justify-start overflow-hidden w-screen h-96  bg-gray-900 lg:h-screen lg:mb-52">
          <div className="relative w-auto z-30 flex items-center justify-center text-white bg-green-400 bg-opacity-90 rounded-r p-5 sm:pl-16 text-base sm:text-2xl lg:text-4xl lg:mt-96">
            Mobile First Profile Pages - Logos News
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 object-cover h-full w-full opacity-40"
          >
            <source src={ProfilesVid} type="video/mp4" />
          </video>
        </header>
        <div className="flex flex-col lg:flex-row lg:mb-52">
          <div
            className={`w-screen h-96 flex flex-col items-center justify-center p-6 lg:h-screen lg:p-16 lg:max-w-xl ${
              isObjective === true ? 'lg:animate-fade-in-right' : 'lg:opacity-0'
            }`}
          >
            <h1 className="text-gray-400 text-xl w-full">Objective</h1>
            <div className="border-b-4 border-gray-200 w-20 mb-10 self-start"></div>
            <p className="text-gray-400 text-sm lg:text-base">
              According to mobile data research, nearly three quarters of the
              world will use just their smartphones to access the internet by
              2025. As more users will turn to their phones for news, it was
              imperative Logos provided a mobile experience that was equal to
              our desktop experience.
            </p>
          </div>
          <div
            className={`w-screen h-96 flex items-center justify-center bg-green-200 lg:h-screen lg:min-w-1/3 ${
              isObjective === true ? 'lg:animate-fade-in-left' : 'lg:opacity-0'
            }`}
          >
            <img
              className="max-w-xs px-4 sm:px-6 sm:max-w-sm lg:max-w-lg"
              src={OldProfiles}
              alt="Old Profiles"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse">
          <div
            className={`w-screen h-96 flex flex-col items-center justify-center p-6 my-6 lg:h-screen lg:my-0 lg:p-16 lg:max-w-xl ${
              isSolution === true ? 'lg:animate-fade-in-left' : 'lg:opacity-0'
            }`}
          >
            <h1 className="text-gray-400 text-xl w-full">Solution</h1>
            <div className="border-b-4 border-gray-200 w-20 mb-10 self-start"></div>
            <p className="text-gray-400 text-sm lg:text-base">
              Starting with our profile pages, I led the initiative to build our
              components with mobile first design. Much of our existing code had
              been built prioritizing desktop and thus has many complications
              when converting to mobile. By prioritizing mobile, we are able to
              avoid development roadblocks in the future and also improve load
              speeds for mobile devices. The latter reason is especially
              important to consider given that mobile coverage is not as strong
              in the Midwest where most of our users reside.
            </p>
          </div>
          <div
            className={`w-screen h-96 flex items-center justify-center bg-green-200 lg:h-screen lg:min-w-1/3 ${
              isSolution === true ? 'lg:animate-fade-in-right' : 'lg:opacity-0'
            }`}
          >
            <div className="flex flex-col items-center mt-8">
              <div className="text-gray-400 h-full lg:mb-5">
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
                        <div>
                          <video
                            autoPlay
                            loop
                            muted
                            className="max-h-60 p-4 sm:max-h-72 sm:px-6 lg:max-h-96"
                          >
                            <source src={slide.video} type="video/mp4" />
                          </video>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row justify-center">
                <div className="flex flex-row items-center">
                  <HiArrowNarrowLeft
                    className="text-3xl z-10 opacity-20 hover:opacity-100"
                    onClick={prevSlide}
                  />
                  <div className="mx-6 opacity-20">{slides[current].title}</div>
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

export default Profiles;
