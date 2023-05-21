import mainImage from "./../images/TopImage.jpg"

import {imageStyle} from "./../styles/TopBlock"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}


const TopBlock: React.FC<Props> = (props) => {
  return (
    <div>
        <img alt='logo' css={imageStyle} src={mainImage} />
    </div>
  );
};

export default TopBlock;