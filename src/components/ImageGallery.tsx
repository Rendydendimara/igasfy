import React, { ReactElement, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

interface IProps {
  images: any[]
  loading: boolean
  fetchImages: () => void
}

const ImageGallery: React.FC<IProps> = ({
  images,
  loading,
  fetchImages,
}): ReactElement => {
  useEffect(() => {
    console.log("images", images)
  }, [images])
  // Create gallery here
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages()}
      hasMore={true}
      loader={
        <p style={{ textAlign: "center", marginTop: "1%" }}>
          More image incoming 📸 📸...
        </p>
      }
    >
      <div className="image-grid">
        {!loading
          ? images.map((image, index) => (
              <div className="image-item" key={index}>
                <img src={image.urls.regular} alt={image.alt_description} />
              </div>
            ))
          : ""}
      </div>
    </InfiniteScroll>
  )
}

export default ImageGallery
