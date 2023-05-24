/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'
import styled from '@emotion/styled'

const Button = styled.button`
  color: #FFFFFF;
  background-color: rgba(201, 162, 131, 0.6);
  border-radius: 4px;
  width: 165px;
  height:56px;
  display: flex;   
  margin: auto; 
  text-align: center;
  align-content: center;
  align-items: center;
  border-style : none ;
`

const buttonText = css({
    fontFamily: "Montserrat-Medium",
    margin:"auto",
    fontSize: "20px",
    lineHeight: "24px",
})

const block= css ({
    backgroundColor: "rgba(176, 141, 114, 0.15)",
    paddingBottom:"80px"
})


const address = css({
    display: "flex",
    flexDirection:"column",
    margin: "auto",
    width:"75%",
    paddingTop: "60px",
    paddingBottom:"50px",
    alignItems:"center",
})

const textBlock = css({
    height:"100%", 
})

const paragraph = css({
    fontFamily: "Montserrat",
    width:"50%",
    margin: "auto",
    textAlign:"center",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.015em",
    color: "rgba(48, 71, 87, 0.8)"
})



const imageStyle = css({
    paddingTop: "20px",
    paddingBottom:"20px"
})

const menuBar = css({
    display: "flex",
    margin: "auto",
    alignItems:"center",
})

const menuStyle = css({
    display: "flex",
    listStyleType:"none",
    color: "#7A3363",
    fontSize:"20px",
    margin: "auto",
    alignItems:"center",
})

const menuButtonsStyle = css ({
    fontFamily:"PlayfairDisplay",
    paddingRight:"30px",
    verticalAlign:"middle",
    lineHeight:"normal",
})

const line = css({
    color:"#C9A28399",
})



export {
    imageStyle,
    address,
    paragraph,
    textBlock,
    block,
    menuButtonsStyle,
    menuStyle,
    line,
    menuBar
}