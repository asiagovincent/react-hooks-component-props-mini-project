import React from 'react';

const About = ({ image, aboutText }) => (
  <aside>
    <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
    <p>{aboutText}</p>
  </aside>
);

export default About;
