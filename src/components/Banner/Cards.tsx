import { cardsData } from "../../data/cardsData";
import "./cards.scss";

export default function Cards() {
  return (
    <section className="cards">
      {cardsData.map((card) => (
        <article className="card" key={card.id}>
          <div className="card__image">
            <img src={card.image} alt={card.title} />
          </div>

          <div className="card__content">
            <h3 className="card__title">{card.title}</h3>
            <p className="card__description">{card.description}</p>
            <button className="card__button">CONFIRA</button>
          </div>
        </article>
      ))}
    </section>
  );
}
