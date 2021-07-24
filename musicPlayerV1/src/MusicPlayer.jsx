import React from "react";
import ReactHowler from "react-howler";
import raf from "raf"; // requestAnimationFrame polyfill
import { AnimatePresence } from "framer-motion";

import Author from "./components/Author";
import Controls from "./components/Controls";
import Slider from "./components/Slider";
import SongTitle from "./components/SongTitle";
import AuthorModal from "./components/AuthorModal";
import ChapterModal from "./components/ChapterModal";

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      loaded: false,
      loop: false,
      mute: false,
      volume: 1.0,
      seek: 0.0,
      isSeeking: false,
      rMin: "0",
      rSec: "00",
      showChapters: false,
      showAuthorDetail: false,
      rate: 1.0,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
    this.handleMouseDownSeek = this.handleMouseDownSeek.bind(this);
    this.handleMouseUpSeek = this.handleMouseUpSeek.bind(this);
    this.handleSeekingChange = this.handleSeekingChange.bind(this);
    this.setSliderProgressRef = this.setSliderProgressRef.bind(this);
    this.handleChapterSeek = this.handleChapterSeek.bind(this);
    this.handlePlaybackSpeed = this.handlePlaybackSpeed.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.handleBackward = this.handleBackward.bind(this);
  }

  componentWillUnmount() {
    this.clearRAF();
  }

  openChaptersModal() {
    this.setState({ showChapters: true });
  }

  closeChaptersModal() {
    this.setState({ showChapters: false });
  }

  openAuthorsDetailsModal() {
    this.setState({ showAuthorDetail: true });
  }

  closeAuthorsDetailsModal() {
    this.setState({ showAuthorDetail: false });
  }

  handleToggle() {
    this.setState({
      playing: !this.state.playing,
    });
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration(),
    });
  }

  handleOnPlay() {
    this.setState({
      playing: true,
    });
    this.renderSeekPos();
  }

  handleOnEnd() {
    this.setState({
      playing: false,
    });
    this.clearRAF();
  }

  handleStop() {
    this.player.stop();
    this.setState({
      playing: false, // Need to update our local state so we don't immediately invoke autoplay
    });
    this.renderSeekPos();
  }

  handleLoopToggle() {
    this.setState({
      loop: !this.state.loop,
    });
  }

  handleMuteToggle() {
    this.setState({
      mute: !this.state.mute,
    });
  }

  handleMouseDownSeek() {
    this.setState({
      isSeeking: true,
    });
  }

  handleMouseUpSeek(e) {
    this.setState({
      isSeeking: false,
    });

    this.player.seek(e.target.value);
  }

  handleChapterSeek(seconds) {
    this.player.seek(seconds);
  }

  handleSeekingChange(e) {
    this.sliderProgressRef.style.width =
      (this.state.seek.toFixed(2) / this.state.duration) * 100 + "%";

    let rangeValue = parseFloat(e.target.value);

    this.setState({
      seek: rangeValue,
    });
  }

  handlePlaybackSpeed() {
    let cState = this.state.rate;

    let nState;

    switch (cState) {
      case 1.0:
        nState = 1.25;
        break;
      case 1.25:
        nState = 1.5;
        break;
      case 1.5:
        nState = 1.75;
        break;
      case 1.75:
        nState = 2.0;
        break;
      case 2.0:
        nState = 1.0;
        break;

      default:
        break;
    }
    this.player._howler.rate(nState);
    this.setState({ rate: nState });
  }

  handleForward() {
    if (this.state.seek + 10 > this.state.duration) return;

    this.sliderProgressRef.style.width =
      ((this.state.seek + 10).toFixed(2) / this.state.duration) * 100 + "%";
    this.player.seek(this.state.seek + 10);
    this.setState((state) => ({ seek: state.seek + 10 }));
  }

  handleBackward() {
    if (this.state.seek <= 10) {
      this.sliderProgressRef.style.width = "0%";
      this.player.seek(0);
      this.setState({ seek: 0 });
    } else {
      this.sliderProgressRef.style.width =
        ((this.state.seek - 10).toFixed(2) / this.state.duration) * 100 + "%";
      this.player.seek(this.state.seek - 10);
      this.setState((state) => ({ seek: state.seek - 10 }));
    }
  }

  renderSeekPos() {
    this.sliderProgressRef.style.width =
      (this.state.seek.toFixed(2) / this.state.duration) * 100 + "%";

    let rangeValue = this.player.seek();

    if (!this.state.isSeeking) {
      this.setState({
        seek: rangeValue,
      });
    }
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  }

  setSliderProgressRef(ref) {
    this.sliderProgressRef = ref;
  }

  clearRAF() {
    raf.cancel(this._raf);
  }

  render() {
    return (
      <div
        style={{ maxWidth: 600 }}
        className="shadow-xl p-4 px-5 sm:p-8 rounded-lg bg-white w-full m-3 relative overflow-hidden"
      >
        <h1 className="text-gray-500 font-medium">23, September</h1>
        <SongTitle songTitle="#052 : Jake Gronsky From MiLB to Author" />
        <Author
          name="John Jebravsky"
          openModal={() => this.setState({ showAuthorDetail: true })}
        />
        <Controls
          isPlaying={this.state.playing}
          togglePlay={this.handleToggle}
          openModal={() => this.setState({ showChapters: true })}
          forward={this.handleForward}
          backward={this.handleBackward}
          handlePlaybackSpeed={this.handlePlaybackSpeed}
          rate={this.state.rate}
        />
        <Slider
          sliderProgressRef={this.setSliderProgressRef}
          handleSeekingChange={this.handleSeekingChange}
          handleMouseDownSeek={this.handleMouseDownSeek}
          handleMouseUpSeek={this.handleMouseUpSeek}
          seek={this.state.seek}
          duration={this.state.duration}
        />

        <div className="text-xs tracking-widest text-gray-600 font-semibold">
          {TimeString(Math.round(this.state.seek))}
        </div>

        <ReactHowler
          src={["jess.mp3"]}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.volume}
          ref={(ref) => (this.player = ref)}
        />

        <AnimatePresence>
          {this.state.showAuthorDetail && (
            <AuthorModal
              key="author"
              closeModal={() => this.setState({ showAuthorDetail: false })}
            />
          )}
          {this.state.showChapters && (
            <ChapterModal
              key="chapters"
              closeModal={() => this.setState({ showChapters: false })}
              handleChapterSeek={this.handleChapterSeek}
              chapters={this.props.chapters}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }
}

function TimeString(sec) {
  var sec_num = parseInt(sec, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hours === "00") hours = "";
  else hours = hours + ":";

  return hours + minutes + ":" + seconds;
}

export default MusicPlayer;
