import { useState } from 'react'
import Header from './components/Header'
import MainImage from './components/MainImage'
import Greeting from './components/Greeting'
import DateInfo from './components/DateInfo'
import Location from './components/Location'
import Gallery from './components/Gallery'
import Account from './components/Account'
import Footer from './components/Footer'
import ImageModal from './components/ImageModal'

function App() {
  const [modalImage, setModalImage] = useState(null)

  const openModal = (imageSrc) => {
    setModalImage(imageSrc)
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <div className="container">
      <MainImage onImageClick={openModal} />
      <Header />
      <Greeting />
      <DateInfo />
      <Location />
      <Gallery onImageClick={openModal} />
      <Account />
      <Footer />
      <ImageModal imageSrc={modalImage} onClose={closeModal} />
    </div>
  )
}

export default App

