import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Md Akib Rahman",
          "React Developer",
          "Vue JS Developer",
          "Laravel Developer",
          "WordPress Developer",
          "MERN Stack",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
