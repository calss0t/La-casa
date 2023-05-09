/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'


type Props = {

}

const header = css({
  backgroundColor: 'lightgray',
  fontWeight: "bold",
  textAlign: "center",
  verticalAlign:"center",
  height: "50px",
  margin: "auto"
})

const Header: React.FC<Props> = (props) => {
  return (
    <div css={header}>
      <div>La casa</div>
    </div>
  );
};

export default Header;