const GalleryImage = ({ id, img }) => {
    return (
        <div key={id} className="column">
            <img src={img} alt=""></img>
        </div>
    )
}
export default GalleryImage;