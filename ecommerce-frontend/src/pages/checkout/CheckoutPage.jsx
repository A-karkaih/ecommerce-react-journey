import { Link } from "react-router";
import "./checkout-header.css";
import "./checkout.css";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
export function CheckoutPage({ cart }) {
  const [deliveryOptions, setdeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((res) => {
        setdeliveryOptions(res.data);
      });

    axios.get("/api/payment-summary").then((res) => {
      setPaymentSummary(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <title>Checkout Page</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
