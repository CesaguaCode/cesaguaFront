import cover from '../../../assets/images/cover.jpg'
export default function ImageHome(){
    return (
      <>
        <div className="image_container">
          <img id="image-cover" src={cover} alt="Logo" />
        </div>
      </>
    );
}