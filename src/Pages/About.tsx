import Textbox from "../Textbox";

function About() {
    return (
        <div className="dark:bg-zinc-900 mx-auto p-5 rounded-lg shadow-lg dark:text-gray-300 max-w-11/12 text-left m-3">
            <Textbox>
                <h1>About Me</h1>
                <p>Hi! I'm Jasper, a second year student at hogeschool rotterdam studying IT in the netherlands.</p>
                <p>I love working on my own graphics related projects and listening to music but most of all, learning
                new things, i'm currently trying to learn new things about realtime rendering.</p>
                <br/>
                <p>I'm currently looking for an internship, preferably on location near Rotterdam or Dordrecht, but remote is also an option. </p>

                <h2 className="text-2xl m-3">Skills:</h2>
                <ul className="list-disc text-left m-3">
                    <li>Programming languages: Lua(JIT), GLSL, C, C++, C#, Python, TypeScript.</li>
                    <li>Software: Visual Studio Code, Blender, Rhino.</li>
                    <li>APIs: OpenGL, Vulkan.</li>
                    <li>Other: Git, Agile, Scrum.</li>
                </ul>
                <h2 className="text-2xl m-3">Experience & Education:</h2>
                <p>Currently studying IT at Hogeschool Rotterdam </p>
                <p>Besides formal education, i've been working on my own projects for about 3 years now, <br/> mainly in the field of computer graphics.</p>
            </Textbox>
        </div>
    )
}

export default About