import React from "react";
import "./style/home.css";
import HEROIMAGE1 from "../images/ring8.png";
import HEROIMAGE2 from "../images/ring7.png";
import PRODUCT2 from "../images/ring5.png";
import PRODUCT1 from "../images/ring6.png";
import BESTPRODUCT0 from "../images/productimage.jpeg";

// icons
import { CiDiscount1 } from "react-icons/ci";
import { LiaShippingFastSolid, LiaMapMarkerAltSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";

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
      name: "Blossom Enchantments Diamond Ring",
      price: 29.99,
    },
    {
      id: 3,
      image: PRODUCT1,
      name: "Rose Lure Diamond Halo",
      price: 39.0,
    },
    {
      id: 4,
      image: PRODUCT2,
      name: "Flora Charm Garnet Ring",
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
          <h2 className="oneItem">RINGS</h2>
          <h2 className="oneItem">BRACELETS</h2>
          <h2 className="oneItem">EARRINGS</h2>
          <h2 className="oneItem">NACKLACES</h2>
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
                  <h3 className="trenItemNmae">
                    {name.length <= 15 ? name : `${name.substring(0, 15)}..`}
                  </h3>
                  <p className="trenItemPrice">${price.toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Best selling product section  */}
      <section className="trending">
        <div className="trendingTitles">
          <p>BEST PRODUCTS</p>
          <h1 className="trenTitle"> BEST SELLING</h1>
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
                  <h3 className="trenItemNmae">
                    {name.length <= 15 ? name : `${name.substring(0, 15)}..`}
                  </h3>
                  <p className="trenItemPrice">${price.toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Best one product section  */}
      <section className="bestProduct">
        <div className="bestProText">
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
        <div className="bestProImgs">
          <img className="bestProImg" src={BESTPRODUCT0} alt="" />
        </div>
      </section>

      {/* small info about us page  */}
      <section className="aboutUs">
        <div className="aboutText">
          <span>BEST IN BUSINESS</span>
          <h1>WHY CHOOSE US</h1>
          <p>
            CRAS MALESUADA DOLOR SIT AMET EST EGESTAS <br />
            ULLAMCORPER. NULLAM IN TORTOR MI. MAECENAS VULPUTATE LIBERO
          </p>
        </div>
        <div className="aboutInfo">
          <div className="infoBody">
            <CiDiscount1 className="icons" />
            <h3>BIG DISCOUNTS</h3>
            <p>
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>
          <div className="infoBody">
            <LiaShippingFastSolid className="icons" />
            <h3>FREE SHIPPING</h3>
            <p>
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>
          <div className="infoBody">
            <RiSecurePaymentLine className="icons" />
            <h3>SECURE PAYMENTS</h3>
            <p>
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>
          <div className="infoBody">
            <LiaMapMarkerAltSolid className="icons" />
            <h3>ORDER TRACKING</h3>
            <p>
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
