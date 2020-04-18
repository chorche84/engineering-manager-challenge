import React, { Component } from "react";
import Promo from "../Promo";
import LoadingSpinner from "../../LoadingSpinner";
import { getWhatsTrendingImage } from '../../../repositories/getWhatsTrendingImage';

class Trending extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getWhatsTrendingImage().then((imageUrl) => {
      this.setState({ imageUrl });
    });
  }

  render () {
    return (
      <Promo title="Whats trending " size={"xlarge"}>
        { this.state.imageUrl ? (
            <picture>
              <img src={this.state.imageUrl} alt="What's trending" />
            </picture>
          ) : (
            <LoadingSpinner />
          )
        }
      </Promo>
    );
  }
};

export default Trending;
