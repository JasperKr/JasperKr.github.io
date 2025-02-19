#version 300 es

in vec2 a_positionA;
in vec2 a_positionB;
in vec2 a_positionC;
in vec2 a_offset;
in vec2 a_velocity;

uniform float u_time;

void main() {
    int vertexID = gl_VertexID;
    vec2 a_position = vertexID == 0 ? a_positionA : vertexID == 1 ? a_positionB : a_positionC;

    gl_Position = vec4(a_position + mod(a_offset + a_velocity * u_time * 10.0f + 1.125f, vec2(2.25f)) - 1.125f, 0.0f, 1.0f);
}