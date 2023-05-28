import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import { MDBIcon } from 'mdb-react-ui-kit';

import { popoverSubDivision, popoverText, iconNumberBox, mainText, subText, buttonText, ButtonPopover } from '../styles/PopoverRooms';

import 'bootstrap/dist/css/bootstrap.min.css';

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global } from '@emotion/react'


function PopoverRooms() {
  const [rooms, setRooms] = useState<number>(0)
  const [adults, setAdults] = useState<number>(2)
  const [children, setChildren] = useState<number>(0)

  const sumRooms = () => {
    setRooms(rooms + 1)
  }

  const diffRooms = () => {
    if (rooms > 0) {
      setRooms(rooms - 1)
    }
  }

  const sumAdults = () => {
    setAdults(adults + 1)
  }

  const diffAdults = () => {
    if (adults > 0) {
      setAdults(adults - 1)
    }
  }

  const sumChildren = () => {
    setChildren(children + 1)
  }

  const diffChildren = () => {
    if (children > 0) {
      setChildren(children - 1)
    }
  }



  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement='bottom'
        rootClose
        overlay={
          <Popover className='popover' >
            <Popover.Body>
              <div css={popoverSubDivision}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div css={popoverText}>
                    <p css={mainText}>Room</p>
                  </div>
                  <div css={iconNumberBox}>
                    <MDBIcon fas icon="plus" style={{ color: "#6D7D8B", padding: "10px", cursor: "pointer" }} size="2x" onClick={sumRooms} />
                    {rooms}
                    <MDBIcon fas icon="minus" style={{ color: "#6D7D8B", padding: "10px", cursor: "pointer" }} size="2x" onClick={diffRooms} />
                  </div>
                </div>
              </div>
              <div css={popoverSubDivision}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div css={popoverText}>
                    <p css={mainText}> Adults</p>
                    <p css={subText}>Ages 13 or above</p>
                  </div>
                  <div css={iconNumberBox}>
                    <MDBIcon fas icon="plus" style={{ color: "#6D7D8B", padding: "10px", cursor: "pointer" }} size="2x" onClick={sumAdults} />
                    {adults}
                    <MDBIcon fas icon="minus" style={{ color: "#6D7D8B", padding: "10px", cursor: "pointer" }} size="2x" onClick={diffAdults} />
                  </div>
                </div>
              </div>
              <div css={popoverSubDivision}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div css={popoverText}>
                    <p css={mainText}>Children</p>
                    <p css={subText}>Ages 0-12</p>
                  </div>
                  <div css={iconNumberBox}>
                    <MDBIcon fas icon="plus" style={{ color: "#6D7D8B", padding: "10px", cursor: "pointer" }} size="2x" onClick={sumChildren} />
                    {children}
                    <MDBIcon fas icon="minus" style={{ color: "#6D7D8B", padding: "10px", cursor: "pointer" }} size="2x" onClick={diffChildren} />
                  </div>

                </div>

              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <ButtonPopover>
        <p css={buttonText}>{adults} adults  {children>0 ? `, ${children} children`: ""}</p>
        <MDBIcon fas icon="angle-down" style={{ color: "#6D7D8B", paddingRight: "5px" }} size="sm" />
        </ButtonPopover>
      </OverlayTrigger>
    </>
  );
}

export default PopoverRooms;