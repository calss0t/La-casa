/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'
import styled from '@emotion/styled'

const Button = styled.button`
  color: #FFFFFF;
  background-color: rgba(201, 162, 131, 0.6);
  border-radius: 4px;
  width: 165px;
  height: 56px;
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

const section = css({
    position: "relative"
})

const bookingBoxOuter = css({
    backgroundColor: "white",
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"100%"
})

const bookingBoxInner = css({
    display:"flex",
    padding:"5px",
    alignItems:"center",
    marginBottom:"5px"
})


const imageStyle = css({
    width: "100%",
    height: "600px"
})

const bookingFormOuter= css({
    position: "relative",
    top:"-150px",
    margin:"auto",
    textAlign:"center",
    width: "50%",
    backgroundColor: "white"
})

const bookingFormInner= css({
    margin:"auto",
    padding:"15px",
    backgroundColor: "blue",
    display:"flex",
})

const bookingTitle = css({
    textAlign:"left",
    paddingLeft:"25px",
    fontFamily: "Montserrat-Medium",
    fontSize: "14px",
    lineHeight: "150.6%",
    color:"#5A87A4",
    paddingTop:"5px",
    marginBottom:"0px"
})


export {
    imageStyle,
    bookingFormOuter,
    section,
    bookingFormInner,
    Button,
    buttonText,
    bookingBoxOuter,
    bookingBoxInner,
    bookingTitle,
}
