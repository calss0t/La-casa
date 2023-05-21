import LOGO from "./../images/LOGO.png"

import {headerStyle, imageStyle, menuStyle, menuButtonsStyle} from "./../styles/header"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}


const Header: React.FC<Props> = (props) => {
  return (
    <div css={headerStyle}>
      <div >
        <img alt='logo' src={LOGO} css={imageStyle} />
      </div>
      <div >
        <ul css={menuStyle}>
          <li css={menuButtonsStyle}>
            About us
          </li>
          <li css={menuButtonsStyle}>
            Rooms
          </li>
          <li css={menuButtonsStyle}>
            Gallery
          </li >
          <li css={menuButtonsStyle}>
            Blog
          </li>
          <li css={menuButtonsStyle}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;