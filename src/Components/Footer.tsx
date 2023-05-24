import LOGO from "./../images/LOGO.png"



import { imageStyle, address, paragraph, textBlock, block, menuButtonsStyle, menuStyle, line, menuBar } from "./../styles/footer"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}

const Footer: React.FC<Props> = (props) => {
    return (
        <div css={block}>
            <div css={address}>
                <img alt='Logo' css={imageStyle} src={LOGO} />
                <div css={textBlock}>
                    <p css={paragraph}> 123 nascetur ridiculus mus, Donec quam felis, Barcelona, Spain </p>
                    <p css={paragraph}> {"(888)123-456-679"}</p>
                    <p css={paragraph}> abcdefg@gmail.com </p>
                </div>
            </div>
            <hr css={line} />
            <div css={menuBar}>
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
            <hr css={line} />
        </div>
    );
};

export default Footer;