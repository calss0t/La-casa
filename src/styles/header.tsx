/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'


const headerStyle = css({
    backgroundColor: '#F8F3EC',
    display: "flex",
    // fontWeight: "bold",
    // textAlign: "center",
    // verticalAlign:"center",
    // margin: "auto",
})

const imageStyle = css({
    marginLeft:"130px",
    padding: "20px",
    height:"40px"
})

const menuStyle = css({
    display: "flex",
    position: "absolute",
    right:"80px",
    listStyleType:"none",
    color: "#7A3363",
    fontSize:"20px",
    textAlign:"center"
    // width: "477px",
    // height: "35px",
    // left: "827px",
    // top: "21px",
})

const menuButtonsStyle = css ({
    paddingRight:"30px",
    verticalAlign:"middle",
    display:"inline-block",
    lineHeight:"normal"
})

export {
    headerStyle,
    imageStyle,
    menuStyle,
    menuButtonsStyle
}
