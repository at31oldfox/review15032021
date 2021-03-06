import React, {forwardRef, memo} from 'react';
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const BigVideoPlayer = forwardRef(({film, onLoadedData}, ref) => (
  <video
    ref={ref} src={film[`video_link`]} className="player__video" poster={film[`preview_image`]}
    onLoadedData={onLoadedData} data-testid="video-player-id"/>
));


BigVideoPlayer.propTypes = {
  ...filmValidation,
  onLoadedData: PropTypes.func.isRequired,
};

const MemoBigVideoPlayer = memo(BigVideoPlayer);

export {MemoBigVideoPlayer};
