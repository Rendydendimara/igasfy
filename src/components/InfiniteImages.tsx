import axios from "axios"
import React, { useEffect, useState, ReactElement, Fragment } from "react"
import "./gallery.css"
import ImageGallery from "./ImageGallery"

let page = 1
interface IProps {}

const OptionsTopics: string[] = [
  "technology",
  "summeronfilm",
  "wallpapers",
  "experimental",
  "nature",
  "people",
  "architecture",
  "current-events",
  "business-work",
  "fashion",
  "random",
]

const InfiniteImages: React.FC<IProps> = (): ReactElement => {
  // Hold state
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [topic, setTopic] = useState<string>("random")

  // Fetch Images from functions
  const fetchImages = (topic: string) => {
    axios(`/.netlify/functions/fetch?topic=${topic}&page=${page}`).then(
      async res => {
        let cloneImages: string[] = []
        await setImages((prevState: string[]) => {
          cloneImages = prevState
          return prevState
        })
        console.log("images", images)
        console.log("cloneImages", cloneImages)
        setImages([...cloneImages, ...res.data.images])
        setLoading(false)
      }
    )
    page = page + 1
  }

  const fetchImagesMore = () => {
    fetchImages(topic)
  }

  const handleChangeTopic = (
    event: React.ChangeEvent<{
      value: any
    }>
  ) => {
    page = 0
    setTopic(event.target.value)
    setImages([])
    fetchImages(event.target.value)
  }

  // Fetch images on component mount
  useEffect(() => {
    fetchImages("random")
  }, [])

  return (
    <div>
      <h1 className="is-size-6 has-text-weight-semibold">Category Search</h1>
      <div className="select is-success">
        <select onChange={handleChangeTopic} value={topic}>
          {OptionsTopics.map((topic, index) => (
            <option value={topic} key={index}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          marginBottom: "10%",
        }}
      ></div>
      <ImageGallery
        images={images}
        loading={loading}
        fetchImages={fetchImagesMore}
      />
    </div>
  )
}

export default InfiniteImages
