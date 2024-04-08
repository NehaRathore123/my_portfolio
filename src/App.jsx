import React from 'react'
import Header from './components/headercomponent/header';
import Nav from './components/navcomponent/nav';
import About from './components/aboutcomponent/about';
import Experience from './components/experiencecomponent/experience';
import Services from './components/servicescomponent/services';
import Portfolio from './components/portfoliocomponent/portfolio';
import Testimonials from './components/testimonialscomponent/testimonials';
import Contact from './components/contactcomponent/contact';
import Footer from './components/footercomponent/footer';
export const App = () => {
  return (
    <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
    </>
  )
}
export default App;