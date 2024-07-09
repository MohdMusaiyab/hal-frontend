import React, { useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";

const birthdaysToday = [
  {
    name: "Alice",
    image:
      "https://w0.peakpx.com/wallpaper/392/642/HD-wallpaper-abd-rcb-thumbnail.jpg",
    dept: "HR",
  },
  { name: "Bob", image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319935.png", dept: "Engineering" },
  // Add more birthday entries
];

const birthdaysTomorrow = [
  { name: "Charlie", image: "https://static.toiimg.com/photo/99705823/99705823.jpg", dept: "Marketing" },
  { name: "Diana", image: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg", dept: "Finance" },
  // Add more birthday entries
];

const BirthdayCard = ({ name, image, dept, onMouseEnter, onMouseLeave }) => (
  <div
    className="shadow-md  border border-blue-400  rounded-lg p-4 mx-2 flex flex-col items-center transition-transform transform hover:scale-105"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <img
      src={image}
      alt={`${name}'s avatar`}
      className="w-24 h-24 rounded-full mb-2"
    />
    <div className="text-lg font-semibold">{name}</div>
    <div className="text-sm text-gray-600">{dept}</div>
  </div>
);

const Birthday = () => {
  const [paused, setPaused] = useState(false);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <div className="my-8 ">
      <div className="text-2xl font-bold text-center mb-4">Birthdays Today</div>
      <StyledMarquee velocity={paused ? 0 : 60}>
        {birthdaysToday.map((person, index) => (
          <BirthdayCard
            key={index}
            name={person.name}
            image={person.image}
            dept={person.dept}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </StyledMarquee>
      <div className="text-2xl font-bold text-center mt-8 mb-4">
        Birthdays Tomorrow
      </div>
      <StyledMarquee velocity={paused ? 0 : 60}>
        {birthdaysTomorrow.map((person, index) => (
          <BirthdayCard
            key={index}
            name={person.name}
            image={person.image}
            dept={person.dept}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </StyledMarquee>
    </div>
  );
};

const StyledMarquee = styled(Marquee)`
  & > * {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default Birthday;
