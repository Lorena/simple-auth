import React from "react"
import View from "./View"
import styles from "./about.module.css"

const About = () => {

  return (
    <View title="About the Intranet">
      <div className={styles[`about__highlight_main_content`]}>
        <div className={styles[`about__highlight`]}>
          <p><span>As ThoughtWorks grows, we need to not only preserve, but enhance our knowledge.</span>
          </p>
        </div>

        <div className={styles[`about__main_content`]}>
        <p><span>Knowledge Management in ThoughtWorks has been mixed over the years. Some approaches have worked well, while others not so much. 
          This Knowledge Management project is to learn from what we have tried before and to build on what has worked well.</span> </p>
          <br/>
      
            <span>This intranet site is the first very thin slice towards improving knowledge management. 
              This iniciative is an investment sponsored by the 
              <a>Global Coordination Group</a>, with 
              <a>Ange Ferguson</a> as the sponsor.</span>
            <p><span>This first release is organized into two main parts: the first one is to surface the content we already 
              have where it supports client-facing activity. The second one is to support all ThoughtWorkers finding more about 
              our policies and internal rules. We have released as early as we can so that we can get more </span></p>
        </div>

      </div>
    </View>
  )
}

export default About
