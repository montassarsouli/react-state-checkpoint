import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Cat Sama",
      bio: "Best cat developer.",
      imgSrc: "./cat.jpeg",
      profession: "Software developer",
    },
    show: false,
    elapsedTime: 0,
  };

  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;
    return (
      <div className="flex flex-col items-center bg-blue-200 border-blue-400 w-60 mx-auto rounded-lg">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.toggleProfile}
        >
          Toggle Profile
        </button>
        {show && (
          <div className="mt-5 items-center">
            <img
              src={imgSrc}
              alt={fullName}
              className="rounded-lg w-32 h-32 mx-auto"
            />
            <h2 className="text-xl font-bold mt-3 items-center mx-auto">
              {fullName}
            </h2>
            <p className="text-gray-600">{profession}</p>
            <p className="mt-2">{bio}</p>
          </div>
        )}
        <p className="mt-5">Time elapsed: {elapsedTime} seconds</p>
      </div>
    );
  }
}
export default App;
