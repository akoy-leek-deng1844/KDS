import { AboutUsCards } from "../../Components/Links"

const AboutContainer = () => {
  return (
      <div className="aboutCardsContainer">
          {AboutUsCards.map((card) => {
              const { icon, title, text, id } = card;
              return (
                <div key={id} className="aboutCards singleService">
                  <div className="icons">{icon}</div>
                  <div className="card-desc">
                    <h4>{title}</h4>
                    {typeof text === "string" ? (
                      <p>{text}</p>
                    ) : (
                      text.map((item) => {
                        return <li key={item.id}>{item.value}</li>;
                      })
                    )}
                  </div>
                </div>
              );
          })}
    </div>
  )
}
export default AboutContainer
