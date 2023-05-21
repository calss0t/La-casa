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


const Section = css({
    display: "flex",
    padding: "45px 140px 45px",
    alignItems:"center",
    backgroundColor: "rgba(176, 141, 114, 0.05)"
})

const textBlock = css({
    paddingRight: "130px",
    height:"100%", 
})

const title = css({
    fontFamily: "PlayfairDisplay",
    fontSize: "50px",
    lineHeight: "116.2%",
    letterSpacing: "0.03em",
    color: "#7A3363"
})

const paragraph = css({
    fontFamily: "Montserrat",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.015em",
    color: "rgba(48, 71, 87, 0.8)"
})

const roomsTypeText = css ({
    fontFamily:"Montserrat-SemiBold",
    color: "rgba(125, 56, 100, 0.8)",
    fontSize: "18px",
    lineHeight: "163.15%",
})


const imageStyle = css({
    objectFit: "cover", 
    marginRight: "100px",
    width: "40%",
    height: "100%",
    borderRadius:"5px"
})



export {
    imageStyle,
    Section,
    Button,
    title,
    paragraph,
    textBlock,
    buttonText,
    roomsTypeText
}