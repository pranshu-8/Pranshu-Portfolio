import React,{Fragment} from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, SplitLetters } from 'react-gsap';
import { Container } from 'react-bootstrap';
import scroll from '../img/scroll.gif'
const Sticky2Styled = styled.div`
  overflow: hidden;
  
  .sticky, .sticky2 {
    height: 100vh;
    width: 100%;
    & .animation, .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100%;
      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 10%;
        margin: 0;
      }
    }
  }
  .name-title {
    position: absolute;
    bottom: 8%;
    left:19%;
    overflow: visible;
    color: white; 
    text-transform: uppercase;
  }
`;
const LandingLayout = () => (
  <Sticky2Styled>
    <Controller>
      <div>
        <Scene
          triggerHook="onLeave"
          duration={2000}
          pin
        >
          {(progress) => (
            <div className="sticky landing">
              <Timeline totalProgress={progress} paused>
                <Timeline 
                  target={
                    <div className='gif'>
                      <p>Scroll Down</p>
                      <i class="fas fa-chevron-down"></i>
                      </div>
                  }>
                     <Tween
                    from={{ opacity: 1 }}
                    to={{ opacity: 0 }}
                  />
                <Timeline
                  target={
                    <div className="name-title">
                      <h2>Pranshu Tewari</h2>
                    </div>
                  }
                >
                  <Tween
                    to={{ y: '-200%'
                     }}
                  />
                  <Tween
                    from={{ opacity: 1 }}
                    to={{ opacity: 0 }}
                  />
                  <Timeline
                  target={
                    <div className='intro'>
                      <Container>
        <p className="hello-world">Hello World! My name is</p>
        <h2 className='intro-name'>Pranshu Tewari</h2>
        <h2 className='intro-tagline'>I love learning new things!</h2>
        <p className="hello-world">Connect with Me: <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/pranshu-tewari-053757200/'> <i class='fa fa-linkedin'  ></i>LinkedIn </a> <a target="_blank" rel="noopener noreferrer" href='https://github.com/pranshu-8'> <i class='fa fa-linkedin'  ></i> Github</a> <a href=''> <i class='fa fa-linkedin'  ></i> </a> </p>
        </Container>
      </div>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                  />
                </Timeline>
                </Timeline>
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
      </div>
    </Controller>
  </Sticky2Styled>
);
export default LandingLayout;