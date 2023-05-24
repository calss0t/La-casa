import Form from 'react-bootstrap/Form';


import { Section, ButtonNewsletter, title, buttonText, form } from "./../styles/newsletter"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}

const Newsletter: React.FC<Props> = (props) => {
    return (
        <div css={Section}>
            <p css={title}> Subscribe To Our Newsletter  </p>
            <div css={form}>
                <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    style={{
                        height:"100%",
                        width:"100%",
                        fontFamily: "Montserrat",
                        fontSize: "18px",
                        lineHeight: "30px",
                        letterSpacing: "0.015em",
                        color: "rgba(48, 71, 87, 0.8)"
                    }}
                />
                <ButtonNewsletter><p css={buttonText}>Subscribe</p></ButtonNewsletter>

            </div>
        </div>
    );
};

export default Newsletter;