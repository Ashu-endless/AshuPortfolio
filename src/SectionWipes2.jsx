import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Intro from "./sections/Intro";
import MyWorks from "./sections/myworks/Myworks";
import ContactMe from "./sections/ContactMe";
const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  

  .panel.blue {
    background-color: #3883d8;
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #22d659;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;

const SectionWipes2 = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene triggerHook="onLeave" duration="300%" pin>
        <Timeline wrapper={<div id="pinContainer" />}>
          <section className="panel blue">
            {/* <span>Panel 1 </span> */}
            <Intro/>
          </section>
          <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
            <section className="panel turqoise">
              {/* <span>Panel 2 </span> */}
              <MyWorks/>
            </section>
          </Tween>
          <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <section className="panel green">
              <span>Panel 3 </span>
              {/* <ContactMe/> */}
            </section>
          </Tween>
          
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;
