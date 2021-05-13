import React, { useState } from 'react';

const devicons = {
  frontend: [
    'devicon-javascript-plain',
    'devicon-react-original-wordmark',
    'devicon-css3-plain-wordmark',
    'devicon-html5-plain-wordmark',
    'devicon-angularjs-plain-wordmark',
    'devicon-vuejs-plain-wordmark',
  ],
  backend: [
    'devicon-nodejs-plain-wordmark',
    'devicon-express-original',
    'devicon-postgresql-plain-wordmark',
    'devicon-mongodb-plain-wordmark',
    'devicon-firebase-plain-wordmark',
  ],
  other: [
    'devicon-github-original-wordmark',
    'devicon-amazonwebservices-plain-wordmark',
    'devicon-docker-plain-wordmark',
    'devicon-babel-plain',
    'devicon-webpack-plain-wordmark',
  ],
};

const Technologies = () => {
  const [full, setLength] = useState(false);
  // const [allBackEnd, setBackEnd] = useState(false);
  // const [allOther, setOther] = useState(false);

  return (
    <section>
      <header>
        <h1 className="text-2xl text-gray-500 mb-3">Technologies</h1>
      </header>
      <div className="text-gray-400 flex flex-row sm:space-x-8">
        <div className="w-full space-y-4 mb-10 sm:w-1/3">
          <h1>Frontend:</h1>
          <div className="sm:hidden">
            {full === false && (
              <div>
                <ul className="space-y-4 text-7xl flex flex-col flex-wrap mb-2">
                  {devicons.frontend.slice(0, 3).map((icon, index) => {
                    return (
                      <li className="w-1/3" key={index}>
                        <i className={icon}></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {full === true && (
              <div>
                <ul className="space-y-4 text-7xl flex flex-col flex-wrap mb-2">
                  {devicons.frontend.map((icon, index) => {
                    return (
                      <li className="w-1/3" key={index}>
                        <i className={icon}></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="hidden sm:block">
            <ul className="space-y-4 text-7xl flex flex-col flex-wrap">
              {devicons.frontend.map((icon, index) => {
                return (
                  <li className="w-1/3" key={index}>
                    <i className={icon}></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full space-y-4 mb-10 sm:w-1/3">
          <h1>Backend:</h1>
          <div className="sm:hidden">
            {full === false && (
              <div>
                <ul className="space-y-4 text-7xl flex flex-col flex-wrap mb-2">
                  {devicons.backend.slice(0, 3).map((icon, index) => {
                    return (
                      <li className="w-1/3" key={index}>
                        <i className={icon}></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {full === true && (
              <div>
                <ul className="space-y-4 text-7xl flex flex-col flex-wrap mb-2">
                  {devicons.backend.map((icon, index) => {
                    return (
                      <li className="w-1/3" key={index}>
                        <i className={icon}></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="hidden sm:block">
            <ul className="space-y-4 text-7xl flex flex-col flex-wrap">
              {devicons.backend.map((icon, index) => {
                return (
                  <li className="w-1/3" key={index}>
                    <i className={icon}></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full space-y-4 mb-10 sm:w-1/3">
          <h1>Other:</h1>
          <div className="sm:hidden">
            {full === false && (
              <div>
                <ul className="space-y-4 text-7xl flex flex-col flex-wrap mb-2">
                  {devicons.other.slice(0, 3).map((icon, index) => {
                    return (
                      <li className="w-1/3" key={index}>
                        <i className={icon}></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {full === true && (
              <div>
                <ul className="space-y-4 text-7xl flex flex-col flex-wrap mb-2">
                  {devicons.other.map((icon, index) => {
                    return (
                      <li className="w-1/3" key={index}>
                        <i className={icon}></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="hidden sm:block">
            <ul className="space-y-4 text-7xl flex flex-col flex-wrap">
              {devicons.other.map((icon, index) => {
                return (
                  <li className="w-1/3" key={index}>
                    <i className={icon}></i>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-gray-400 sm:hidden">
        {full === false && (
          <button onClick={() => setLength(true)} className="text-sm">
            Show More
          </button>
        )}
        {full === true && (
          <button onClick={() => setLength(false)} className="text-sm">
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Technologies;
