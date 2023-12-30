import NavBar from './components/navbar'
import Footer from './components/footer'
import HomePageHeroSection from './components/herosection'
import FeaturedProjectCarousel from './components/featuredprojectcarousel'
import ServiceSection from './components/servicesection'

export default function Home() {
  return (
      <main>
        <NavBar/>
        <HomePageHeroSection/>
        <ServiceSection/>
        <FeaturedProjectCarousel/>
        <Footer/>
      </main>
  )
}
