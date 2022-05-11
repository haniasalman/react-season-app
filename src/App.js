import React from "react";
import SeasonDisplay from "./SeasonDisplay";

//class based component. here react.comp is used and we are taking its functionality and using it in our App class funtionality
class App extends React.Component {
  state = {
    lat: null,
    errMsg: "",
  };

  // it will be called only one time whenevr the class is created
  componentDidMount() {
    //   The Geolocation.getCurrentPosition() method is used to get the current position of the device.
    //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback, [options])
    //   success: A callback fn that takes a GeolocationPosition object as input parameter.
    //   error : An optional callback fn that takes a GeolocationPositionError object as input parameter.
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }), // to update our state we always use setState. directly 
                                                                      //updating the this.state obj with value is wrong.
      (error) => this.setState({ errMsg: error.message })
    );
  }

  // to ignore using multiple return statements in render fn, optional renderContent() is used to wrap it in a single fn and then  
  // called under single return statemnt
  renderContent() {
    if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errMsg) {
      return <div> Error : {this.state.errMsg} </div>;
    }

    return (
      <div className="ui active dimmer">
        <div className="ui medium text loader">Loading...</div>
      </div>
    );
  }

  render() {
    return <div>
      {this.renderContent()} 
      </div>;
  }
}

export default App;
