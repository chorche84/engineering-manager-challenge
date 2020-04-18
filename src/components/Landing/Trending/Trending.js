import React, { Component } from "react";
import Promo from "../Promo";
import { getWhatsTrendingImage } from '../../../repositories/getWhatsTrendingImage';

class Trending extends Component {

  componentDidMount() {
    getWhatsTrendingImage();
  }

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
