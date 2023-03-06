import React from "react";
import MapCard from "../../../shared/CardLink/MapCard";
import MapCardsSection from "../../../shared/CardLink/MapCardsSection";
import links from "../../../shared/CardLink/links.json";
import "../../../shared/CardLink/sitemapPage.scss";

const MyCards = () => {
  return (
    <div className="container-fluid section_separator d-flex justify-content-center">
      <section className="tier-container map-tier2__container">
        {links.childs.map(({ title, icon, link, childs }) => (
          <div className="page-group" key={title}>
            <MapCard title={title} icon={icon} link={link} />
            {childs && <MapCardsSection links={[]} />}
          </div>
        ))}
      </section>
    </div>
  );

  //   const styles = (index:any) => {
  //       const style = {
  //         width: "120px",
  //         height: "120px",
  //         backgroundColor: index % 2 === 0 ? "#f18424" : "#9ac026",
  //       };

  //       return style;

  //   };

  // const cardInfo = [
  //   {
  //     title: "1",
  //     text: "Static Website",
  //   },

  //   {
  //     title: "2",
  //     text: "Static Website",
  //   },

  //   {
  //     title: "3",
  //     text: "Static Website",
  //   },
  //   {
  //     title: "4",
  //     text: "Newsletter Sign Up",
  //   },
  //   {
  //     title: "5",
  //     text: "React App",
  //   },
  //   {
  //     title: "6",
  //     text: "My App",
  //   },
  // ];

  // const renderCard = (card:any, index:any) => {
  //   return (
  //     <div key={index} style={styles(index)} className="link-card card p-3 m-3">
  //       <div className="card-body">{card.title}</div>
  //     </div>
  //   );
  // };
  //   return (
  //     <div className="container-fluid bg-light">
  //       <div className="row  d-flex justify-content-center">
  //         {cardInfo.map(renderCard)}
  //       </div>
  //     </div>
  //   );
};

export default MyCards;
