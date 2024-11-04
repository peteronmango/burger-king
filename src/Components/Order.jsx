import React from "react";
import OrderNav from "./OrderNav";
import OrderBody from "./OrderBody.JSX";
import OrderModal from "./OrderModal";
import { Footer } from "./Footer";

function Order() {
  return (
    <>
      <OrderNav />
      <OrderBody />
      <Footer />
    </>
  );
}

export default Order;
