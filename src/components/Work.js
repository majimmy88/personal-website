import React, { useState } from 'react';
import Onboarding from '../assets/onboarding-clip.gif';
import MusicPlayer from '../assets/music-player-clip.gif';
import ProfilePage from '../assets/profile-page-clip.gif';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const projects = [
  {
    name: 'New User Onboarding - Logos News',
    image: Onboarding,
    imageAlt: 'Onboarding Clip',
    description: `Based on google analytics, our writers who had a complete profile
    had significantly more readership. This new user onboarding flow was
    created for writers to fill in a complete profile including a bio,
    their credentionals, and a profile picture as soon as they register
    on our site.`,
  },
  {
    name: 'Profile Pages (Mobile-First Responsive Design) - Logos News',
    image: ProfilePage,
    imageAlt: 'Profile Page Clip',
    description: `According to a recent report, nearly three quarters of the world will use just their smartphones to access the internet by 2025. I led the initiative to refresh our user profile pages with mobile-first design to improve load speeds on mobile devices.`,
  },
  {
    name: 'Music Player',
    image: MusicPlayer,
    imageAlt: 'Music Player Clip',
    description: `Music player with features such as now playing, queue, top 10,
    search, and browse. Application optimized with caching and
    server-side HTTP requests.`,
  },
];

const Work = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }

  return (
    <section className="h-96 mb-52">
      <header>
        <h1 className="text-2xl text-gray-500 mb-8">Work</h1>
      </header>
      <div className="text-gray-400 relative h-full">
        <FaArrowAltCircleLeft
          className="text-5xl absolute top-1/2 left-0 z-10 opacity-20 hover:opacity-100"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="text-5xl absolute top-1/2 right-0 z-10 opacity-20 hover:opacity-100"
          onClick={nextSlide}
        />
        {projects.map((project, index) => {
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
                  <h1 className="mb-2">{project.name}</h1>
                  <div className="flex justify-center">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-auto h-auto mb-8 max-h-80"
                    />
                  </div>
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
