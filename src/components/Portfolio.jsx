import React from "react";
import Card from "./Card";

function Portfolio() {
  return (
    <section className="portfolio  bg-white text-black py-5" id="portfolio">
      <div className="container">
        <div className="row">
          <Card data={{ title: "Web Design", bg: '#282c34ad' }} />
          <Card data={{ title: "Web Development", bg: '#282c34' }} />
          <Card data={{ title: "SEO Handling", bg: '#282c34ad' }} />
          <Card data={{ title: "Web Development", bg: '#282c34' }} />
          <Card data={{ title: "Web Design", bg: '#282c34ad' }} />
          <Card data={{ title: "SEO Handling", bg: '#282c34' }} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio;