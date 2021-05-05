// import logo_html5 from '../assets/logo_html5.svg';
// import logo_css3 from '../assets/logo_css3.svg';
// import logo_react from '../assets/logo_react.svg';

const Technologies = () => {
  return (
    <section>
      <header>
        <h1 class="text-2xl text-gray-500 mb-3">Technologies</h1>
      </header>
      <div class="text-gray-400 flex flex-row space-x-10 overflow-x-scroll">
        <div class="w-96 space-y-4">
          <h1>Frontend:</h1>
          <ul class="space-y-4 text-7xl">
            <li>
              <i class="devicon-javascript-plain"></i>
            </li>
            <li>
              <i class="devicon-react-original-wordmark"></i>
            </li>
            <li>
              <i class="devicon-angularjs-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-vuejs-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-html5-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-css3-plain-wordmark"></i>
            </li>
          </ul>
        </div>
        <div class="w-96 space-y-4">
          <h1>Backend:</h1>
          <ul class="space-y-4 text-7xl">
            <li>
              <i class="devicon-nodejs-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-express-original"></i>
            </li>
            <li>
              <i class="devicon-postgresql-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-mongodb-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-firebase-plain-wordmark"></i>
            </li>
          </ul>
        </div>
        <div class="w-96 space-y-4">
          <h1>Other:</h1>
          <ul class="space-y-4 text-7xl">
            <li>
              <i class="devicon-github-original-wordmark"></i>
            </li>
            <li>
              <i class="devicon-amazonwebservices-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-docker-plain-wordmark"></i>
            </li>
            <li>
              <i class="devicon-babel-plain"></i>
            </li>
            <li>
              <i class="devicon-webpack-plain-wordmark"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
