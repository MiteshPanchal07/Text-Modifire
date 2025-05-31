import React, { useState } from "react";


export default function About({ mode }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: "New text updates #1",
      content: "This text utility app helps you manipulate your text easily — convert to uppercase, lowercase, clear text, copy, and remove extra spaces."
    },
    {
      title: "Easy to use #2",
      content: "With a clean interface and intuitive tools, this app makes text editing effortless for anyone."
    },
    {
      title: "Free to Use #3",
      content: "Absolutely free and open to use. Built with ReactJS and Bootstrap for modern web experiences."
    },
    {
      title: "Fast and Efficient #4",
      content: "All operations happen instantly in your browser without needing any internet requests or backend processing."
    },
    {
      title: "Privacy Friendly #5",
      content: "We do not store or send your text anywhere. Everything runs locally in your browser to ensure your data remains private."
    },
    {
      title: "Mobile Responsive #6",
      content: "Fully responsive design makes it easy to use on mobile devices, tablets, and desktops."
    },
    {
      title: "Upcoming Features #7",
      content: "We're working on adding word frequency analysis, grammar suggestions, and dark/light theme personalization options soon."
    }
  ];


  const bg = mode === 'dark' ? '#0d1b2a' : 'white';
  const color = mode === 'dark' ? 'white' : 'black';

  return (
    <div className="container my-4" style={{ backgroundColor: bg, color }}>
      <h1>About Us</h1>
      {accordionData.map((item, index) => (
        <div key={index} className="my-2">
          <button
            className={`btn ${mode === 'dark' ? 'btn-outline-light' : 'btn-outline-primary'} text-left w-100 text-start`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="border rounded p-3" style={{ backgroundColor: bg, color }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
