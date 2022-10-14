import PublicMap from "../../../../shared/PublicMap/PublicMap";
import MapMarker from "../../../../shared/MapMarker/MapMarker";
import ClickComponent from "./ClickComponent";
import PinInputComponent from "./PinInputComponent";
import useCreateMap from "./useCreateMap";
import usePins from "../../usePins";

interface props {
  newMarker:any,
  setNewMarker:any,
  handleCreate:any,
  handleCancel:any,
  nameRef:any,
  mapState:any
}
const CreateMap = ({newMarker, setNewMarker,handleCreate, handleCancel, nameRef, mapState}:props) => {
  const { setMap, setZoom, handleName } = useCreateMap({newMarker, setNewMarker, mapState});

  const {pins}:any= usePins() 

  return (
    <section className="map-creation__section">
      <div className="cretion-map__wrapper">
        <PublicMap
          setMap={setMap}
          markers={pins}
          extras={
            <>
              <MapMarker key={newMarker.name} {...newMarker}></MapMarker>
              <ClickComponent setClicked={setNewMarker}></ClickComponent>
            </>
          }
        ></PublicMap>
      </div>

      <PinInputComponent
        newMarker={newMarker}
        setNewMarker={setNewMarker}
        setZoom={setZoom}
        handleName={handleName}
        handleCreate={handleCreate}
        handleCancel={handleCancel}
        nameRef={nameRef}
      ></PinInputComponent>
    </section>
  );
};

export default CreateMap;