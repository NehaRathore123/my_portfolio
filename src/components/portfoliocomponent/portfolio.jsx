import React from 'react'
import '../portfoliocomponent/portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.webp';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio5.jpg';

// do not use the images in production

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Wheather App',
  Description: 'The Weather App project is a web application built using HTML, CSS, and JavaScript that provides real-time weather information. It fetches data from a weather API and displays current temperature, conditions, humidity, and wind speed for any location. The app features a search function, geolocation support, and a responsive design, ensuring a user-friendly experience across various devices.', 
  github: 'https://github.com/NehaRathore123/Wheather-App-Javascript',
  demo: 'https://joyful-kringle-4b7724.netlify.app/'
},

{
  id: 2,
  image: IMG2,
  title: 'Tic Tac Toe',
  Description: 'The Tic Tac Toe project using React.js is a web-based application that allows users to play the classic game interactively. It features dynamic UI updates, efficient state management, and a component-based architecture, ensuring a smooth and responsive gameplay experience. This project serves as a practical introduction to React concepts such as state, props, and component lifecycle.',
  github: 'https://github.com/NehaRathore123/Tic-Tac-Toe-Game',
  demo: 'https://tic-tac-toe-react-neha.netlify.app/'
},
{
  id: 3,
  image: IMG3,
  title: 'Ecommerce App',
  Description: 'The eCommerce app using React.js is a dynamic web application designed for online shopping. It features product listings, detailed product pages, shopping cart management, and a secure checkout process. Utilizing React,s state management and React Router, the app ensures efficient updates and seamless navigation, providing a comprehensive shopping experience.',
  github: 'https://github.com/NehaRathore123/Ecommerce-App',
  demo: 'https://ecommerce-app-react-neha.netlify.app/'
},
 {
  id: 4,
  image: IMG4,
  title: 'Light Dark Mode',
  Description: 'The light/dark mode feature using Reactjs allows users to switch between light and dark themes for a web application. This project leverages Reacts state management to toggle between themes, updating the UI dynamically. It enhances user experience by providing a visually appealing interface that adapts to different lighting conditions and user preferences, ensuring accessibility and comfort during prolonged use.',
  github: 'https://github.com/NehaRathore123/Light-dark-mode',
  demo: 'https://light-dark-mode-react-neha.netlify.app/'
},
{
  id: 5,
  image: IMG5,
  title: 'React Curd',
  Description: 'The React CRUD (Create, Read, Update, Delete) app using React.js is a web application that allows users to perform basic data operations. It features a user-friendly interface to add, view, edit, and delete items, utilizing Reacts state management and component-based architecture for dynamic updates. The app ensures efficient data handling and provides a seamless experience for managing records, making it an excellent demonstration of Reacts capabilities in building interactive and data-driven applications.',
  github: 'https://github.com/NehaRathore123/React-curdOperation',
  demo: 'https://shiny-cobbler-e647df.netlify.app/'
},

{
  id: 6,
  image: IMG6,
  title: 'Charts templete and infographics in Figma',
  github: 'https://github.com',
  demo: 'https://dribble.com/shorts/16541289-origin-UI-kit-charts-templates-infographics-in-Figma'
},
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,Description,github,demo})=>{
          return(
            <article className='portfolio__item'>
            <div className='portfolio__item-image'>
           <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <h4>{Description}</h4><br/>
            <div className='portfolio__item-cta'>
            <a href= {github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
          )
        })
      }
         </div>
    </section>
  )
}

export default portfolio