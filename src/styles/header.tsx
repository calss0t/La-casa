/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'

const block= css ({
    backgroundColor: "#F8F3EC"
})

const headerStyle = css({
    display: "flex",
    margin: "auto",
    width:"75%",
    alignItems:"center",
    textAlign:"center"
})

const imageStyle = css({
    paddingTop: "20px",
    paddingBottom:"20px"
})

const menuStyle = css({
    display: "flex",
    // float:"right",
    position: "absolute",
    right:"80px",
    listStyleType:"none",
    color: "#7A3363",
    fontSize:"20px",
    margin: "auto",
    alignItems:"center",
    textAlign:"center"
})

const menuButtonsStyle = css ({
    fontFamily:"PlayfairDisplay",
    paddingRight:"30px",
    verticalAlign:"middle",
    display:"inline-block",
    lineHeight:"normal"
})

export {
    headerStyle,
    imageStyle,
    menuStyle,
    menuButtonsStyle,
    block
}
