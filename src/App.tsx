import './App.css'
import { CarouselImages } from './CarouselImages'
import { Navigation } from 'lucide-react'
import { MainNavigationMenu } from './Navigation'

function App() {
  return (
    <>
      <head>
        <title>Jasper Krocké</title>
      </head>

      {/* <header className="bg-white dark:bg-gray-800 text-black dark:text-white p-5">
        <Navigation />
      </header> */}

      <body className="bg-gray-100 dark:bg-gray-700">
        <div className="bg-white dark:bg-gray-800 max-w-4xl mx-auto p-5 rounded-lg shadow-lg ">
          <MainNavigationMenu />
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-5">
            <h1 className="text-4xl font-bold mb-5">Welcome to my Portfolio</h1>
            <p className="text-lg leading-relaxed">Hi, I'm Jasper Krocké, an aspiring graphics programmer. </p>
            <p className="text-lg leading-relaxed">This is my portfolio website, where I showcase some of my projects. </p>
            <p className="text-lg leading-relaxed">Feel free to look around and contact me if you have any questions!</p>

            <CarouselImages />
          </div>
        </div>
      </body>
    </>
  )
}

export default App
