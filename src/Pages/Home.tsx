import { Link } from 'react-router-dom'
import '../App.css'
import { ImageCarousel } from '../carousel'
import Textbox from '../Textbox'

function Home() {
  return (
    <div className="dark:bg-zinc-900 mx-auto p-5 rounded-lg shadow-lg dark:text-zinc-300 max-w-7xl min-w-2xl">
        <Textbox>
            <p>Hi! I'm Jasper Krocké, an aspiring graphics programmer. </p>
            <p>This is my personal website, where I showcase some of my projects. </p>
            <p>Feel free to look around and contact me if you have any questions!</p>
            <p>Here's a preview of some of my projects:</p>
        </Textbox>
        <Textbox>
            <ImageCarousel />
        <p className="text-xs">Drag to the left / right, or click the arrows to navigate the carousel.</p>
        </Textbox>
        <Textbox>
            <p>Learn more about me <Link to="/about" className="hover:text-gray-500">Here</Link></p>
            <p>Check out my projects <Link to="/projects" className="hover:text-gray-500">Here</Link></p>
            <p>Or contact me <Link to="/contact" className="hover:text-gray-500">Here</Link></p>
        </Textbox>
    </div>
  )
}
export default Home
