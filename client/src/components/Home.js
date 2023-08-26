import React from "react";
import "./style/home.css";
import HEROIMAGE1 from "../images/ring8.png";
import HEROIMAGE2 from "../images/ring7.png";
import PRODUCT2 from "../images/ring5.png";
import PRODUCT1 from "../images/ring6.png";

function Home() {
  const itempItems = [
    {
      id: 1,
      image: HEROIMAGE1,
      name: "Floral Mesmerisations Diamond Ring",
      price: 19.99,
    },
    {
      id: 2,
      image: HEROIMAGE2,
      name: "Item 2",
      price: 29.99,
    },
    {
      id: 3,
      image: PRODUCT1,
      name: "Item 3",
      price: 39.0,
    },
    {
      id: 4,
      image: PRODUCT2,
      name: "Item 4",
      price: 49.99,
    },
  ];

  return (
    <div className="home-container">
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">
            THE NEW RINGS <br />
            SENSATION
          </h1>
          <p className="heroDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            cupiditate blanditiis quae dolorem consequatur!
          </p>
          <button className="heroBtn">SHOP NOW</button>
        </div>
        <div className="heroimage">
          <img className="heroImg" src={HEROIMAGE1} alt="" />
          <img className="heroImg" src={HEROIMAGE2} alt="" />
        </div>
      </section>

      {/* section one starts  */}
      <section className="one">
        <div className="oneItems">
          <h2 className="oneItem">ITEM1</h2>
          <h2 className="oneItem">ITEM2</h2>
          <h2 className="oneItem">ITEM3</h2>
          <h2 className="oneItem">ITEM4</h2>
        </div>
      </section>

      {/* trending section  */}
      <section className="trending">
        <div className="trendingTitles">
          <p>POPULAR PRODUCTS</p>
          <h1 className="trenTitle"> TRENDING NOW</h1>
        </div>
        <div className="line">
          <div className="lineline"></div>
        </div>
        <div className="trenProducts">
          {itempItems.map((items) => {
            const { id, name, image, price } = items;
            return (
              <div className="trenProduct" key={id}>
                <div className="trenImgs">
                  <img className="trenImg" src={image} alt="product" />
                </div>
                <div className="namePrice">
                  <h3 className="trenItemNmae">{name.length <= 15 ? name : `${name.substring(0, 15)}..`}</h3>
                  <p className="trenItemPrice">${price.toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bestSelling">BEST SELLING</section>

      <section className="bestProduct">BEST PRODUCT</section>

      <section className="aboutUs">ABOUT US SMALL</section>
    </div>
  );
}

export default Home;
