import Textbox from "../Textbox"


function Projects() {
  return (
    <div className="dark:bg-zinc-900 mx-auto p-5 rounded-lg shadow-lg dark:text-gray-300 max-w-11/12 text-left m-3">
        <h1 className="p-5 text-center text-4xl">Projects</h1>
        <Textbox>
            <p>Here you can find some extra info on the projects i've worked on as a hobby.</p>
            <p>All of my current experience in computer graphics comes from stuff i've learned hands on myself</p>
            <p>Most of my projects are written in Lua and GLSL, as i find it's a great language for prototyping while keeping performance.</p>
            <p>The only exception to this is the Vulkan renderer, which is written in C++.</p>
            <p>As i want to start learning more about low level programming and how things work under the hood.</p>
            <p>Here are some of the projects i've worked on:</p>
        </Textbox>
        <Textbox>
            <h3 className="text-center text-2xl m-3">Rhodium</h3>
            <p>Rhodium is a 3D game engine written in Lua and GLSL. It's built on top of the LÖVE game framework and uses mainly Vulkan, but also supports OpenGL and Metal for rendering,
                Thanks <a href="https://github.com/slime73">Sasha</a> and all other contributers for making such a great framework!</p>
                This is the project i'm currently working on and also the one i've been working on for the longest, it's a project i'm very proud of and i'm very happy with the progress i've made so far.<br />
                This project has been a great learning experience and i'm learning new things every day.<br />
            <ul className="list-disc text-left p-5 rounded-lg shadow-lg dark:bg-zinc-700 my-3">
                <h4 className="text-center text-2xl">Some of the features of Rhodium are:</h4>
                <li>Physically based rendering, inspired by <a href="https://github.com/google/filament">The Google Filament renderer</a></li>
                <li>Lighting from Directional, Point, Spot, Quad area and Sphere area Lights</li>
                <li>Image based lighting, with in-engine IBL generation</li>
                <li>Hi-Z Screen space reflections with GGX distribution for sampling</li>
                <li>Realtime shadows for directional, point and spot lights</li>
                <li>Post processing effects like Bloom, Auto exposure, Tonemapping</li>
                <li>A GLTF 2.0 object loader, adapted from <a href="https://github.com/rozenmad/Menori"> Menori</a> to use multithreading</li>
                <li>Ambient occlusion with GTAO, using <a href="https://github.com/GameTechDev/XeGTAO"> XeGTAO </a> translated to GLSL</li>
                <li>Tiled light rendering, allowing for hunderds of actively contributing lights</li>
                <li>Cascaded shadow maps for directional lights</li>
                <li>GPU driven particle system with support for millions of simulated particles</li>
            </ul>
            <img src="assets/images/1.png" alt="Rhodium" className="rounded-lg shadow-lg mx-auto w-[80vw]"/>
            <p>The project is currently closed source, but i'm planning on making it open source in the future when it's more stable.</p>
        </Textbox>
        
        <Textbox>
            <h3 className="text-center text-2xl m-3">Vulkan Renderer</h3>
            <p>This is a project i made to learn more about the Vulkan API, it's a simple renderer that uses C++ and Vulkan to render models with their albedo maps.</p>
            <p>I haven't continued working on this project as i find Vulkan tedious to work with and i find it's more interesting to work on Rhodium,
                but it was still a great learning experience and i learned a lot about the Vulkan API.<br />
                <a href="https://github.com/JasperKr/VulkanTest">This</a> is the github repository for the project.
            </p>
            <img src="assets/images/7.png" alt="Vulkan Renderer" className="rounded-lg shadow-lg mx-auto w-[80vw]"/>
        </Textbox>
        
        <Textbox>
            <h3 className="text-center text-2xl m-3">Raytracer</h3>
            <p>This is a project i made to learn more about raytracing, it's a simple raytracer that uses the LÖVE game framework and lot of code i copied from Rhodium to setup a scene.<br />
                I occasionally work on this project to make improvements, but my interest lies more in realtime rendering than offline rendering.<br />
                <a href="https://github.com/JasperKr/Raytracing">This</a> is the github repository for the project.
            </p>
            <img src="assets/images/2.png" alt="Raytracer" className="rounded-lg shadow-lg mx-auto w-[80vw]"/>
        </Textbox>
    </div>
  )
}
export default Projects