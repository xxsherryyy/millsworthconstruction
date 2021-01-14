import React from 'react';
import styled from 'styled-components';

export const VideoContainer = styled.div`
.bg-video {
  z-index: -3;
  opacity: .9;
  overflow: hidden;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
`

const BackgroundVideo = ({ mp4 }) => {
    return (
      
        <video className="bg-video__content" autoPlay muted loop>
          <source src={mp4} type="video/mp4" />
   
          Your browser is not supported!
        </video>
     
    );
}
export default BackgroundVideo