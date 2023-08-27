import ImageSlide from "./ImageSlide"

const Service = ({heading, icon, text}) => {
  return (
      <div className="singleService">
          <ImageSlide icon={ icon} />
          <h5>{heading}</h5>
          <p>{ text}</p>
    </div>
  )
}
export default Service