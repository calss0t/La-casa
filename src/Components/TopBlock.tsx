import mainImage from "./../images/TopImage.jpg"

import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { MDBIcon } from 'mdb-react-ui-kit';
import moment from "moment";
import DatePicker from "react-datepicker";


import { imageStyle, bookingFormOuter, section, bookingFormInner, Button, buttonText, bookingBoxOuter, bookingBoxInner, bookingTitle } from "./../styles/TopBlock"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}


const TopBlock: React.FC<Props> = (props) => {
  const [startDate, setStartDate] = useState<string>(moment().format('DD/MM/YYYY'))
  const [endDate, setEndDate] = useState<string>(moment().add(1, "day").format('DD/MM/YYYY'))


  return (
    <div css={section}>
      <img alt='logo' css={imageStyle} src={mainImage} />
      <div css={bookingFormOuter}>
        <div css={bookingFormInner}>
          <div style={{ width: "100%", display: "flex" }}>
            <div css={bookingBoxOuter}>
              <p css={bookingTitle}> Check in </p>
              <div css={bookingBoxInner} style={{ borderRight: "1px solid #BBC8D4" }}>
                <MDBIcon icon="calendar-alt" style={{ color: "#6D7D8B", paddingRight: "5px" }} />
                <DatePicker selected={new Date()} onSelect={()=> console.log(setEndDate)} onChange={(date)=>console.log(date)}/>
                {/* <Form.Control
                  placeholder={startDate}
                  aria-label="Email"
                  style={{
                    border: "none",
                    height: "100%",
                    width: "100%",
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "14px",
                    lineHeight: "150.6%",
                    // color: "#DAE3EA"
                  }}
                /> */}

              </div>
            </div>
            <hr />
            <div css={bookingBoxOuter} >
              <p css={bookingTitle}> Check out </p>
              <div css={bookingBoxInner} style={{ borderRight: "1px solid #BBC8D4" }}>
                <MDBIcon icon="calendar-alt" style={{ color: "#6D7D8B", paddingRight: "5px" }} />
                <Form.Control
                  placeholder={endDate}
                  aria-label="Email"
                  style={{
                    border: "none",
                    height: "100%",
                    width: "100%",
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "14px",
                    lineHeight: "150.6%",
                    // color: "#DAE3EA",
                  }}
                />

              </div>
            </div>
            <hr />
            <div css={bookingBoxOuter}>
              <p css={bookingTitle}> Guests </p>
              <div css={bookingBoxInner}>
                <MDBIcon icon="user-alt" style={{ color: "#6D7D8B", paddingRight: "5px" }} />
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  style={{
                    border: "none",
                    height: "100%",
                    width: "100%",
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: "14px",
                    lineHeight: "150.6%",
                    // color: "#DAE3EA"
                  }}
                />

              </div>
            </div>
          </div>
          <Button><p css={buttonText}>Read more</p></Button>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;