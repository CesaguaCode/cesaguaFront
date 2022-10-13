import { memo } from "react";

import { useMapEvents } from "react-leaflet";

const ClickComponent = ({ setClicked }: { setClicked: any }) => {
  const map = useMapEvents({
     move: () =>{
        setClicked((previous: any) => {
          return {
            ...previous,
            position: map.getCenter(),
          };
        });
      },
    
  });
  return <></>;
};

export default memo(ClickComponent);
