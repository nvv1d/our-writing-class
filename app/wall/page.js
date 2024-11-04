"use client";

export default function BestWorkWall() {
  const bestWorks = []; // This will eventually come from the database

  return (
    <div>
      <h1>Best Work Wall</h1>
      {bestWorks.map((work, index) => (
        <div key={index}>
          <h2>{work.title}</h2>
          <h3>by {work.name}</h3>
          <p>{work.text}</p>
        </div>
      ))}
    </div>
  );
}
