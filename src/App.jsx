import TopBanner from "./Components/TopBanner"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Title from "./Components/Title"

function App() {

  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <Title text1 = 'Shop' text2 = 'By Category' showLink={true} />
    </>
  )
}

export default App
