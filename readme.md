<a name="readme-top"></a>
<div align="center">

  ![Project Banner](readme_assets/readme_banner.png#gh-dark-mode-only)
  ![Project Banner](readme_assets/readme_banner-light.png#gh-light-mode-only)

  <h1>Zexercise</h1>
  
  <p>
    Zexercise is a modern <b>Fitness Exercises App</b> with beautiful UI using the Material UI
  </p>

<!-- Badges -->
<p>
  <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/ladunjexa/Zexercise-Fitness-App" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/ladunjexa/Zexercise-Fitness-App" alt="last update" />
  </a>
  <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/network/members">
    <img src="https://img.shields.io/github/forks/ladunjexa/Zexercise-Fitness-App" alt="forks" />
  </a>
  <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/stargazers">
    <img src="https://img.shields.io/github/stars/ladunjexa/Zexercise-Fitness-App" alt="stars" />
  </a>
  <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/issues/">
    <img src="https://img.shields.io/github/issues/ladunjexa/Zexercise-Fitness-App" alt="open issues" />
  </a>
  <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/ladunjexa/Zexercise-Fitness-App.svg" alt="license" />
  </a>
</p>
   
 <h4>
    <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Zexercise-Fitness-App">Documentation</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/ladunjexa/Zexercise-Fitness-App/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [About the Project](#star2-about-the-project)
  * [Folder Structure](#bangbang-folder-structure)
  * [Environment Variables](#key-environment-variables)
  * [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

</details>  

<!-- About the Project -->
## :star2: About the Project

<div align="center"> 
  <img src="readme_assets/Explorium-mockup.png" height="auto" width="85%" />
</div>
<br />

Zexercise is a Fitness Exercises App with the functionality to choose exercise categories and specific muscle groups,
browse 1,300 exercises with practical examples, pagination, exercise detail, pull related videos from youtube, display similar exercises,
and much more - based on [YouTube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download) & [Exercise DB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) APIs powered by [RapidAPI](https://rapidapi.com).

<!-- Folder Structure -->
### :bangbang: Folder Structure

Here is the folder structure of Zexercise.
```
Zexercise-Fitness-App/
|- public/
|- src/
  |-- assets/
  |-- components/
  |-- pages/
  |-- utils/
```

Now, lets dive into the public and src folders.

### public

`index.html` - `manifest.json`

The public folder contains the HTML file so you can tweak it, for example, to set the page title. The <script> tag with the compiled code will be added to it automatically during the build process.

### src

#### components

`BodyPart.js` - `Detail.js` - `ExerciseCard.js` - `ExerciseVideos.js` - `Exercises.js` - `Footer.js` - `HeroBanner.js` - `HorziontalScrollbar.js` - `Loader.js` - `Navbar.js` - `SearchExercises.js` - `SimilarExercises.js`

JS files contain **Zexercise** components which split the UI into independent and reusable pieces.

`BodyPart.js` - This component displays exercise category used for muscle groups search.

`Detail.js` - This component displays exercise detail used for any exercise page.

`ExerciseCard.js` - This component displays exercise card with the body part, target muscle and name that links to related exercise page.

`ExerciseVideos.js` - This component displays a box of exercise video with the video title, channel name, and thmubnail.

`Exercises.js` - This component displays the list of exercises by fetching data according to user-input using ExerciseCard widget.

`Footer.jsx` , `Navbar.jsx` - This components displays the Navigation Bar & Footer.

`HeroBanner.js` - This component displays a beautiful HeroBanner with quotes.

`HorizontalScrollbar.js` - This component handle the Horizontal Scrollbar widget logic used for many components, built with `react-horizontal-scrolling-menu` dependency.

`SearchExercises.js` - This component display the search box and handle search logic.

`SimilarExercises.js` - This component display a similar exercises by target muscle used for any exercise page.

`Loader.js` - InfinitySpan loadig component for display while waiting to fetch the result from the APIs using `react-loader-spinner` package.

`Results.jsx` - Results component handles the display form of the fetched results, that is, widgets for the various links.

`Router.jsx` - Router component enables the navigation among views of various components in application.

`Search.jsx` - Search components (includes search field, search button and classification links).

#### pages

`ExerciseDetail.js` - Implementation of dynamic Exercise Detail page which explore exercise detail, videos and similar exercises.

`Home.js` - Implementation of Home page, where the user can search for exercises according to data types (name, target muscle, equipment or body part) and explore a preview of the exercises found.

#### utils

`fetchData.js` - Fetching data from sources using RapidAPI using environment variables for API keys.

<br />

<!-- ENV VARIABLES -->
### :key: Environment Variables

In order to use Zexercise you have to create your [YouTube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download) & [Exercise DB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) api key powered by RapidAPI [here](https://rapidapi.com), to run this web app, you will need to add the following environment variable to your .env file

`REACT_APP_RAPID_API_KEY`
`REACT_APP_RAPID_YOUT_API_KEY`

The variable can be combined when using a single API key, the fetchData file must be updated accordingly.

<!-- TechStack -->
### :space_invader: Tech Stack
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React 18](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
[<img src="https://user-images.githubusercontent.com/71302066/174567516-824b1967-5954-4ac7-9446-14a3b2ab825d.svg" alt="Rapid API" width="100.75" height="28">](https://rapidapi.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Installation -->
### :gear: Installation

#### Step 1:
Download or clone this repo by using the link below:

```bash
 https://github.com/ladunjexa/Zexercise-Fitness-App
```

#### Step 2:

Explorium using NPM (Node Package Manager), therefore, make sure that Node.js is installed by execute the following command in console:

```bash
  node -v
```

#### Step 3:

At the main folder execute the following command in console to get the required dependencies:

```bash
  npm install
```

#### Step 4:

Within the main folder create a file named `.env` and add the following [environment variable](#key-environment-variables):


```bash
  REACT_APP_RAPID_API_KEY=<YOUR_EXERCISE_DB_API_KEY>
  REACT_APP_RAPID_YOUT_API_KEY=<YOUR_YOUTUBE_SEARCH_AND_DOWNLOAD_API_KEY>
```


<!-- Run Locally -->
### :running: Run Locally

#### Step 1:

At the main folder execute the following command in console to get the required dependencies:

```bash
  npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/ladunjexa/Zexercise-Fitness-App/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ladunjexa/Zexercise-Fitness-App" />
</a>


Contributions are always welcome!

See [`contributing.md`](https://contributing.md/) for ways to get started.

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- License -->
## :warning: License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/ladunjexa/Zexercise-Fitness-App/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Contact -->
## :handshake: Contact

Liron Abutbul - [@lironabutbul6](https://twitter.com/lironabutbul6) - [@ladunjexa](https://t.me/ladunjexa)

Project Link: [https://github.com/ladunjexa/Zexercise-Fitness-App](https://github.com/ladunjexa/Zexercise-Fitness-App)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Acknowledgments -->
## :gem: Acknowledgements

This section used to mention useful resources and libraries that used in Zexercise

 - [RapidAPI](https://rapidapi.com/)
 - [MaterialUI](https://mui.com/)
 - #JSMastery

<p align="right">(<a href="#readme-top">back to top</a>)</p>
