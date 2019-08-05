import React from "react";

import { connect } from "react-redux";
import Sound from "react-sound";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux'
import { Creators as PlayerActions } from '../../store/ducks/player'

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

import Slider from "rc-slider";

const Player = ({ player, play, pause, next, prev }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} onFinishedPlaying={next} />
    )}

    <Current>
      {!!player.currentSong &&
        <React.Fragment>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />

          <div>
            <span>{player.currentSong.thumbnail}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </React.Fragment>}
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button onClick={prev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="Play" />
          </button>
        ) : (
            <button onClick={play}>
              <img src={PlayIcon} alt="Play" />
            </button>
          )}
        <button onClick={next}>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button >
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:30</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:34</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#FFF" }}
        handleStyle={{ display: "none" }}
        value={50}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string
    }),
    status: PropTypes.string
  }).isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
