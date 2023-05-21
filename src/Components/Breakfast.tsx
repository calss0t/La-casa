import BreakfastImage from "./../images/Breakfast.jpg"

import {  imageStyle, Section, Button, title, paragraph, textBlock, buttonText } from "./../styles/breakfast"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}

const Breakfast: React.FC<Props> = (props) => {
    return (
      <div css={Section}>
        <img alt='BreakfastImage' css={imageStyle} src={BreakfastImage} />
        <div css={textBlock}>
            <p css={title}> Breakfast </p>
            <p css={paragraph}> We’ll prepare delicious local breakfasts for you, commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <Button><p css={buttonText}>Read more</p></Button>
        </div>
      </div>
    );
  };

export default Breakfast;