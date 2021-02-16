import React from "react";
import axios from "axios";
// import Gio from "react-giojs";
// import ReactGlobe from "react-globe";

class GlobeSection extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios
      .get(`../data/sampleData.json`)
      .then((response) => this.setState({ data: response.data }));
  }

  render() {
    return <div>hey hey</div>;
  }
}

export default GlobeSection;
