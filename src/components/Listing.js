import React from "react";
import Title from "./Title";
import Price from "./Price";

function Listing(props) {
  return (
    <div className="item-list">
      {props.items.map((item, idx) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image" key={item.listing_id}>
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt="img" />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              <Title title={item.title} />
            </p>
            <p className="item-price">
              <Price price={item.price} currency_code={item.currency_code} />
              {item.price.split(".")[1] <= 10 ? (
                <span className="level-low">
                  {/* item.price.split(".")[1] - это 2 цифры после точки */}
                  {item.price.split(".")[1]}
                </span>
              ) : (
                true
              )}
              {item.price.split(".")[1] > 10 &&
              item.price.split(".")[1] <= 20 ? (
                <span className="level-medium">{item.price.split(".")[1]}</span>
              ) : (
                true
              )}
              {item.price.split(".")[1] > 20 ? (
                <span className="level-high">{item.price.split(".")[1]}</span>
              ) : (
                true
              )}

              {item.currency_code === "GBP"
                ? item.price.replace(/[^a-zа-яё\s]/gi, "") + " GBP"
                : true}
            </p>
            <p className="item-quantity level-medium">{item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listing;

Listing.defaultProps = {
  items: []
};
