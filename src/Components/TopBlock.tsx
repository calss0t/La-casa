import mainImage from "./../images/TopImage.jpg"

import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { MDBIcon } from 'mdb-react-ui-kit';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css"


import { imageStyle, bookingFormOuter, section, bookingFormInner, Button, buttonText, bookingBoxOuter, bookingBoxInner, bookingTitle } from "./../styles/TopBlock"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'
import PopoverRooms from "./PopoverRooms";



type Props = {

}


const TopBlock: React.FC<Props> = (props) => {
  const [startDate, setStartDate] = useState<Date | any>()
  const [endDate, setEndDate] = useState<Date | any>()


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
                  <DatePicker 
                  onChange={(date) => setStartDate(date)} 
                  className="datepicker-form"
                  placeholderText={moment().format("DD/MM/YYYY")}
                  minDate={new Date()} 
                  monthsShown={2}
                  selected={startDate}
                  />
              </div>
            </div>
            <hr />
            <div css={bookingBoxOuter} >
              <p css={bookingTitle}> Check out </p>
              <div css={bookingBoxInner} style={{ borderRight: "1px solid #BBC8D4" }}>
                <MDBIcon icon="calendar-alt" style={{ color: "#6D7D8B", paddingRight: "5px" }} />
                <DatePicker 
                placeholderText={moment().add(1, 'days').format("DD/MM/YYYY")}
                onChange={(date) => setEndDate(date)} 
                className="datepicker-form" 
                minDate={startDate}
                monthsShown={2}
                selected={endDate}
                />
              </div>
            </div>
            <hr />
            <div css={bookingBoxOuter}>
              <p css={bookingTitle}> Guests </p>
              <div css={bookingBoxInner}>
                <MDBIcon icon="user-alt" style={{ color: "#6D7D8B", paddingRight: "5px" }} />
                <PopoverRooms/>
              </div>
            </div>
          </div>
          <Button><p css={buttonText}>Search</p></Button>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;