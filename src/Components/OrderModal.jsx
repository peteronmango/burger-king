import React from "react";
import deliveryIcon from "../assets/deliveryicon.svg";
import dineIcon from "../assets/dineinicon.svg";
import takeoutIcon from "../assets/takeouticon.svg";

function OrderModal() {
  return (
    <>
      <div className="bigcont">
        <div className="modal-container">
          <h1>What Would You Like?</h1>
          <div className="fDiv mod">
            <div>
              <img src={deliveryIcon} />
            </div>
            <button className="fButton modb ">
              Dine In Pick up
              <p className="fptag qtag">Order is served in resturant</p>
            </button>
          </div>
          <div className="sDiv mod">
            <img src={dineIcon} />
            <button className="sButton modb">
              Takeout<p className="sptag qtag">Order is packed for outside</p>
            </button>
          </div>
          <div className="tDiv mod">
            <img src={takeoutIcon} />
            <button className="tButton modb">
              Delivery
              <p className="fptag qtag">Order is served in resturant</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
