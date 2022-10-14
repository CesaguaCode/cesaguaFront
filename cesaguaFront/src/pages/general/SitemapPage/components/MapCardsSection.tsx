import { memo } from "react";
import MapCard from "./MapCard";

const MapCardsSection = ({ links }: any) => {
 
  return (
    <section className="tier-container map-tier3__container">
      {links.map((link: { title: string; icon: string, link:string }) => 
        <MapCard key={link.title} {...link}></MapCard>
      )}
    </section>
  );
};

export default memo(MapCardsSection);
