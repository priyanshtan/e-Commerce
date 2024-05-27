import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce, or electronic commerce, refers to the buying and selling
          of goods and services over the internet. It encompasses a wide range
          of business activities, including retail, wholesale, and the provision
          of various digital services.
        </p>
        <p>E-commerce is the buying and selling of goods and services online, including retail, wholesale, and digital services, facilitated by websites, apps, and secure payment systems.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
