/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'
import styled from '@emotion/styled'

const ButtonPopover = styled.button`
  color: #FFFFFF;
  background-color: white;
  border-radius: 4px;
  display: flex;
  display-direction: column;   
  margin: auto; 
  text-align: center;
  align-content: center;
  align-items: center;
  border-style : none ;
`

const buttonText = css({
    fontFamily: "Montserrat-Medium",
    margin: "auto",
    fontSize: "15px",
    lineHeight: "24px",
    color:"black",
    paddingRight:"10px"
})

const popoverSubDivision = css({
    display: "flex",
    paddingBottom: "5px",
    textAlign: "center"
})

const popoverText = css({
    margin:"auto",
    alignItems:"baseline",
    width:"150px",
    textAlign:"left",
    paddingLeft:"10px"
})

const iconNumberBox= css({
    display:"flex",
    alignItems:"center"
})

const mainText = css({
    fontWeight:"Bold",
    fontFamily: "Montserrat-Medium",
    fontSize: "14px",
    lineHeight: "150.6%",
    marginBottom:"0px"
})

const subText = css({
    fontFamily: "Montserrat-Medium",
    fontSize: "12px",
    lineHeight: "150.6%",
    marginBottom:"0px",
    color:"gray"
})





export {
    ButtonPopover,
    buttonText,
    popoverSubDivision,
    popoverText,
    iconNumberBox,
    mainText,
    subText
}