import React, { Component } from "react";
import Promo from "../Promo";

class Trending extends Component {
  render () {
    return (
      <Promo title="Whats trending " size={"xlarge"}>
        <picture>
          <img src={""} alt="What's trending" />
        </picture>
      </Promo>
    );
  }
};

export default Trending;
