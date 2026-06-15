import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import Mission from '../components/sections/Mission'
import Collection from '../components/sections/Collection'
import Recipe from '../components/sections/Recipe'
import WhereToBuy from '../components/sections/WhereToBuy'
import SocialMedia from '../components/sections/SocialMedia'
import Footer from '../components/sections/Footer'

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Collection />
        <Recipe />
        <WhereToBuy />
        <SocialMedia />
      </main>
      <Footer />
    </>
  )
}
