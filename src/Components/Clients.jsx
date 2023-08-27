import ClientsSlider from "./ClientsSlider"
const Clients = () => {
  return (
      <div className="clients">
          <div className="clients-desc">
              <div className="title">
                  <h2 className="page">Our clients</h2>
                  <div className="underline"></div>
              </div>
              <p>
                As a cross platform company, Kwintech has served different clients of various nature, sizes and types. Over the years, we have had the privilege of serving the following companies among others. 
              </p>
          </div>
          <ClientsSlider />
          
    </div>
  )
}
export default Clients