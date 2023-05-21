import AboutImage from "./../images/About.jpg"

import {  imageStyle, aboutSection, Button, title, paragraph, textBlock, buttonText } from "./../styles/about"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}

const About: React.FC<Props> = (props) => {
    return (
      <div css={aboutSection}>
        <div css={textBlock}>
            <p css={title}> About La Casa Guest House </p>
            <p css={paragraph}> Gmperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.</p>
            <Button><p css={buttonText}>Read more</p></Button>
        </div>
          <img alt='AboutImage' css={imageStyle} src={AboutImage} />
      </div>
    );
  };

export default About;