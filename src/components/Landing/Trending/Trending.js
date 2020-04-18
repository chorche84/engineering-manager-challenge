import React, { Component } from "react";
import Promo from "../Promo";
import { getWhatsTrendingImage } from '../../../repositories/getWhatsTrendingImage';

class Trending extends Component {
  constructor (props) {
    super(props);
    this.state = { imageUrl: "" };
  }

  componentDidMount() {
    getWhatsTrendingImage().then((imageUrl) => {
      this.setState({ imageUrl });
    });
  }

  render () {
    return (
      <Promo title="Whats trending " size={"xlarge"}>
        <picture>
          <img src={this.state.imageUrl} alt="What's trending" />
        </picture>
      </Promo>
    );
  }
};

export default Trending;
