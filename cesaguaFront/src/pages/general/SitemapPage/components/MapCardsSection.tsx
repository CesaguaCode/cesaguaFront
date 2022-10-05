import { memo } from "react";
import MapCard from "./MapCard";

const MapCardsSection = ({ links }: any) => {

  return (
    <section className="tier-container map-tier3__container">
      {links.map(({ title, icon }: { title: string; icon: string }) => 
        <MapCard key={title} title={title} icon={icon}></MapCard>
      )}
    </section>
  );
};

export default memo(MapCardsSection);
