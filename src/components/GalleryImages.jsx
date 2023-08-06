import GalleryImage from "./GalleryImage";
import { imageData } from "./hardcoded/ImageData";


const GalleryImages = () => {
    return (
        <div>
        {
          imageData.map(image=> <GalleryImage id={image.id} img={image.img} />)
        }
      </div>
    )
}
export default GalleryImages;