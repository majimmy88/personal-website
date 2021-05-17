import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Onboarding from '../assets/onboarding-clip.gif';
import MusicPlayer from '../assets/music-player-clip.gif';
import ProfilePage from '../assets/profile-page-clip.gif';
import Reviews from '../assets/reviews-clip.gif';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const projects = [
  {
    name: 'New User Onboarding – Logos News',
    image: Onboarding,
    imageAlt: 'Onboarding Clip',
    description: `According to our analytics, Logos writers who had a completed profile
    received significantly more readership. This new user onboarding flow was
    created for writers to fill in a complete profile including a bio,
    their credentionals, and a profile picture as soon as they register
    on our site. Built on Angular and Firebase.`,
    link: '/work/onboarding',
  },
  {
    name: 'Mobile First Profile Pages – Logos News',
    image: ProfilePage,
    imageAlt: 'Profile Page Clip',
    description: `According to a recent report, nearly three quarters of the world will use just their smartphones to access the internet by 2025. I led the initiative to refresh our user profile pages with mobile-first design to improve load speeds on mobile devices. Built on Angular and Firebase.`,
    link: '/work/profiles',
  },
  {
    name: 'Music Player',
    image: MusicPlayer,
    imageAlt: 'Music Player Clip',
    description: `Music player with features such as now playing, queue, top 10,
    search, and browse. Application optimized with caching and
    server-side HTTP requests. Built on Vue and Express.`,
  },
  {
    name: 'Rental Reviews',
    image: Reviews,
    imageAlt: 'Reviews Clip',
    description: `Microservice built for hotel or rental websites such as Kayak or Airbnb. Features ratings for different catagories, average rating for all catagories, keyword search, and pagination. Built on React, Express, Node and MongoDB.`,
  },
];

const WorkCarousel = () => {
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
    <section id="work" className="h-96 mb-64">
      <header className="flex flex-row justify-between">
        <h1 className="text-2xl text-gray-500 mb-8">Work</h1>
        <div className="flex flex-row">
          <HiArrowNarrowLeft
            className="text-3xl z-10 opacity-20 hover:opacity-100 mr-6"
            onClick={prevSlide}
          />
          <HiArrowNarrowRight
            className="text-3xl z-10 opacity-20 hover:opacity-100"
            onClick={nextSlide}
          />
        </div>
      </header>
      <div className="text-gray-400 relative h-full">
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
                  {project.link && (
                    <h1 className="mb-8">
                      <Link
                        to={project.link}
                        className="hover:text-black hover:underline"
                      >
                        {project.name}
                      </Link>
                    </h1>
                  )}
                  {!project.link && <h1 className="mb-8">{project.name}</h1>}
                  <div className="flex justify-center">
                    <Link to={project.link}>
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-auto h-auto mb-8 max-h-80"
                      />
                    </Link>
                  </div>
                  <p>
                    {project.description}
                    {
                      <Link
                        to={project.link}
                        className="ml-3 hover:text-black hover:underline"
                      >
                        Learn More
                      </Link>
                    }
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkCarousel;
