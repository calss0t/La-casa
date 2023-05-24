/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'
import styled from '@emotion/styled'


const block= css ({
    backgroundColor: "rgba(176, 141, 114, 0.05)"
})


const Section = css({
    display: "flex",
    margin: "auto",
    width:"75%",
    paddingTop: "70px",
    paddingBottom:"70px",
    alignItems:"center",
    textAlign:"center"
})

const textBlock = css({
    height:"100%", 
    margin: "auto",
    alignItems:"center",
    textAlign:"center"
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

const paragraph = css({
    fontFamily: "Montserrat",
    width:"50%",
    margin: "auto",
    textAlign:"center",
    marginBottom:"42px",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.015em",
    color: "rgba(48, 71, 87, 0.8)"
})


const author = css({
    fontFamily: "Mulish-SemiBold",
    margin: "auto",
    textAlign:"center",
    marginBottom:"42px",
    fontSize: "20px",
    lineHeight: "163.15%",
    letterSpacing: "0.015em",
    color: "#5A87A4"
})



export {
    Section,
    title,
    paragraph,
    textBlock,
    block,
    author
}