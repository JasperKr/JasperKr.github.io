import { useEffect, useRef } from 'react';

import vertexShaderSource from '@/Shaders/background.vs';
import fragmentShaderSource from '@/Shaders/background.fs';

const GradientShaderBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl2') as WebGL2RenderingContext;
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // Vertex shader
        const vsSource = vertexShaderSource

        // Fragment shader
        const fsSource = fragmentShaderSource

        // Compile shader helper
    const compileShader = (source: string, type: number) => {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
    };
  
    // Create program
    const vertexShader = compileShader(vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return;
    }

    gl.useProgram(program);

    const numInstances = 10000;

    const scale = 0.3;

    const offsets = new Float32Array(numInstances * 2);
    const velocities = new Float32Array(numInstances * 2);
    const vtxAPositions = new Float32Array(numInstances * 2);
    const vtxBPositions = new Float32Array(numInstances * 2);
    const vtxCPositions = new Float32Array(numInstances * 2);
    for (let i = 0; i < numInstances; i++) {
        offsets[i * 2] = Math.random() * 2 - 1;
        offsets[i * 2 + 1] = Math.random() * 2 - 1;
        velocities[i * 2] = Math.random() * 0.01 - 0.005;
        velocities[i * 2 + 1] = Math.random() * 0.01 - 0.005;
        vtxAPositions[i * 6] = 0.0;
        vtxAPositions[i * 6 + 1] =( 0.1 + Math.random() * 0.05 - 0.025) * scale;
        vtxBPositions[i * 6] = (-0.1 + Math.random() * 0.05 - 0.025) * scale;
        vtxBPositions[i * 6 + 1] = (-0.1 + Math.random() * 0.05 - 0.025) * scale;
        vtxCPositions[i * 6] =( 0.1 + Math.random() * 0.05 - 0.025) * scale;
        vtxCPositions[i * 6 + 1] = (-0.1 + Math.random() * 0.05 - 0.025) * scale;
    }

    const positionABuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionABuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vtxAPositions, gl.STATIC_DRAW);

    const positionALocation = gl.getAttribLocation(program, 'a_positionA');
    gl.enableVertexAttribArray(positionALocation);
    gl.vertexAttribPointer(positionALocation, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(positionALocation, 1); // Instancing

    const positionBBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vtxBPositions, gl.STATIC_DRAW);

    const positionBLocation = gl.getAttribLocation(program, 'a_positionB');
    gl.enableVertexAttribArray(positionBLocation);
    gl.vertexAttribPointer(positionBLocation, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(positionBLocation, 1); // Instancing

    const positionCBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionCBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vtxCPositions, gl.STATIC_DRAW);

    const positionCLocation = gl.getAttribLocation(program, 'a_positionC');
    gl.enableVertexAttribArray(positionCLocation);
    gl.vertexAttribPointer(positionCLocation, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(positionCLocation, 1); // Instancing
  
    // Create buffer for the offsets
    const offsetBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, offsets, gl.STATIC_DRAW);

    const offsetLocation = gl.getAttribLocation(program, 'a_offset');
    gl.enableVertexAttribArray(offsetLocation);
    gl.vertexAttribPointer(offsetLocation, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(offsetLocation, 1); // Instancing

    // Create buffer for the velocities
    const velocityBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, velocityBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, velocities, gl.STATIC_DRAW);

    const velocityLocation = gl.getAttribLocation(program, 'a_velocity');
    gl.enableVertexAttribArray(velocityLocation);
    gl.vertexAttribPointer(velocityLocation, 2, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(velocityLocation, 1); // Instancing

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      // Time uniform
    const timeUniform = gl.getUniformLocation(program, 'u_time');
  
    // Resize canvas
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  
    // Render loop
    const render = (time: number) => {
        gl.uniform1f(timeUniform, time * 0.001);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArraysInstanced(gl.TRIANGLES, 0, 3, numInstances);
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
        window.removeEventListener('resize', resizeCanvas);
    };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default GradientShaderBackground;