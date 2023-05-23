import RoomsImage from "./../images/Rooms.jpg"

import {  imageStyle, Section, Button, title, paragraph, textBlock, buttonText, roomsTypeText, block } from "./../styles/rooms"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}

const Rooms: React.FC<Props> = (props) => {
    return (
      <div css={block}>
      <div css={Section}>
        <img alt='BreakfastImage' css={imageStyle} src={RoomsImage} />
        <div css={textBlock}>
            <p css={title}> Room </p>
            <p css={paragraph}> We’ll prepare delicious local breakfasts for you, commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p css={roomsTypeText}>Single Room With Private Shower</p>
            <p css={roomsTypeText}>Double Room With Private Shower</p>
            <Button><p css={buttonText}>Read more</p></Button>
        </div>
      </div>
      </div>
      
    );
  };

export default Rooms;