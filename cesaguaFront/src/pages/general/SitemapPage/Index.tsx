import { useState } from "react";
import MapCard from "./components/MapCard";
import MapCardsSection from "./components/MapCardsSection";

import links from "./links.json"

import "./sitemapPage.scss";

const SitemapPage = () => {
  
  const [first, setfirst] = useState(0)

  return (
      <div className="tier-container map-tier1__container">
        <MapCard title={links.title} icon={links.icon} />

        <section className="tier-container map-tier2__container">
          
          {links.childs.map(({title, icon, childs}) => 
            <div className="page-group" key={title}>
              <MapCard title={title} icon={icon} />
                { childs && <MapCardsSection links={childs}/> }
            </div>
          )}

        </section>

      </div>
  );
};

export default SitemapPage;