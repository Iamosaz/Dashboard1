import React, { useState } from "react";
import setting from "../assets/setting.png";
import profile from "../assets/profile.png";
import box from "../assets/box.png";
import people from "../assets/people.png";
import personalcard from "../assets/personalcard.png";
import shield from "../assets/shield.png";
import cards from "../assets/cards.png";
import data from "../assets/data.png";
import money from "../assets/money.png";
import building from "../assets/building.png";
import Card from "./Card";

const CardList = () => {
  const [active, setActive] = useState(null);

  const cardData = [
    {
      id: 1,
      icon: setting,
      title: "Nursing Assistant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      icon: profile,
      title: "Nursing Assistant",
      description:
        "In purus sem, lobortis quis sapien vel, elementum dapibus nulla...",
    },
    {
      id: 3,
      icon: box,
      title: "Web Designer",
      description:
        "Sed euismod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 4,
      icon: people,
      title: "Dog Trainer",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et...",
    },
    {
      id: 5,
      icon: personalcard,
      title: "Nursing Assistant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 6,
      icon: cards,
      title: "Marketing Coordinator",
      description:
        "Sed euismod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 7,
      icon: money,
      title: "Marketing Coordinator",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et...",
    },
    {
      id: 8,
      icon: data,
      title: "Web Designer",
      description:
        "In purus sem, lobortis quis sapien vel, elementum dapibus nulla...",
    },
    {
      id: 9,
      icon: shield,
      title: "Medical Assistant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 10,
      icon: building,
      title: "Marketing Coordinator",
      description:
        "Sed euismod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 11,
      icon: shield, // Reusing shield for missing icon example.
      title: "Web Designer",
      description:
        "In purus sem, lobortis quis sapien vel, elementum dapibus nulla...",
    },
    {
      id: 12,
      icon: people,
      title: "President of Sales",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et...",
    },
  ];

  return (
    <div className="bg-[#F9F9F9]">
      <div className="p-8">
        <h2 className="font-bold text-3xl py-3">Hello Eric Tolani</h2>
        <p>Welcome to your dashboard</p>
      </div>
      <div className="grid grid-cols-3 gap-6 p-8 mt-4">
        {cardData.map((item) => (
          <Card
            key={item.id}
            src={item.icon}
            text={item.title}
            description={item.description}
            isActive={active === item.id}
            onClick={() => setActive(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
