/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'
import styled from '@emotion/styled'

const ButtonNewsletter = styled.button`
  color: #FFFFFF;
  background-color: rgba(201, 162, 131, 0.6);
  border-radius: 4px;
  height: 100%;
  width: 30%;
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

const Section = css({
    display: "flex",
    flexDirection:"column",
    margin: "auto",
    width:"50%",
    paddingTop: "131px",
    paddingBottom:"150px",
    alignItems:"center",
})

const form = css({
    display: "flex",
    height:"40px",
    width:"75%"
})

const title = css({
    fontFamily: "PlayfairDisplay",
    fontSize: "50px",
    margin: "auto",
    textAlign:"center",
    marginBottom:"42px",
    lineHeight: "116.2%",
    letterSpacing: "0.03em",
    color: "#7A3363"
})



export {
    Section,
    ButtonNewsletter,
    title,
    form,
    buttonText,
}