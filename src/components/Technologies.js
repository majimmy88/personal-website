const Technologies = () => {
  return (
    <section>
      <header>
        <h1 className="text-2xl text-gray-500 mb-3">Technologies</h1>
      </header>
      <div className="text-gray-400 flex flex-row space-x-8">
        <div className="w-96 space-y-4">
          <h1>Frontend:</h1>
          <ul className="space-y-4 text-7xl">
            <li>
              <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              <i className="devicon-react-original-wordmark"></i>
            </li>
            <li>
              <i className="devicon-angularjs-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-vuejs-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-html5-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-css3-plain-wordmark"></i>
            </li>
          </ul>
        </div>
        <div className="w-96 space-y-4">
          <h1>Backend:</h1>
          <ul className="space-y-4 text-7xl">
            <li>
              <i className="devicon-nodejs-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-express-original"></i>
            </li>
            <li>
              <i className="devicon-postgresql-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-mongodb-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-firebase-plain-wordmark"></i>
            </li>
          </ul>
        </div>
        <div className="w-96 space-y-4">
          <h1>Other:</h1>
          <ul className="space-y-4 text-7xl">
            <li>
              <i className="devicon-github-original-wordmark"></i>
            </li>
            <li>
              <i className="devicon-amazonwebservices-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-docker-plain-wordmark"></i>
            </li>
            <li>
              <i className="devicon-babel-plain"></i>
            </li>
            <li>
              <i className="devicon-webpack-plain-wordmark"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;