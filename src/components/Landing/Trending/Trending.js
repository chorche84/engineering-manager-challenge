import React, { Component } from "react";
import Promo from "../Promo";
import LoadingSpinner from "components/LoadingSpinner";
import getTrendingData from 'repositories/getTrendingData';
import getWhatsTrendingImage from 'repositories/getWhatsTrendingImage';

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
    const { title, alt } = getTrendingData();

    return (
      <Promo title={title} size={"xlarge"}>
        { this.state.imageUrl ? (
            <picture>
              <img src={this.state.imageUrl} alt={alt} />
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
