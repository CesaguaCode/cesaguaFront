import TableHeader from "../../../shared/TableHeader/TableHeader"
import CreateMap from "./components/CreateMap"

import "./pinsCreatePage.scss"

const PinsCreatePage = () => {
  return (

    <>
    <h2 className="pin-inputs__title">Agregar un sitio</h2>
    <CreateMap />
    </>
  )
}

export default PinsCreatePage