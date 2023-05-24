import React, { useEffect, useState } from "react";
import { MDBIcon } from 'mdb-react-ui-kit';



import { block, Section, title, paragraph, textBlock, author } from "./../styles/coments"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}

const Coments: React.FC<Props> = (props) => {

    const [coment, setComent] = useState<{ id:number, Title: string, Coment: string, Author: string }>({ id:0, Title: "Title", Coment: "Coment", Author: "Author" });

    useEffect(()=>{
        setComent(coments[0])
    },[])


    const coments: { id:number, Title: string, Coment: string, Author: string }[] = [
        {
            id:1,
            Title: "Coment 1",
            Coment: "Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1 Blablabla 1",
            Author: "Mike"
        },
        {
            id:2,
            Title: "Coment 2",
            Coment: "Blablabla 2",
            Author: "John"
        },
        {
            id:3,
            Title: "Coment 3",
            Coment: "Blablabla 3",
            Author: "May"
        },
        {
            id:4,
            Title: "Coment 4",
            Coment: "Blablabla 4",
            Author: "Michelle"
        }
    ]

    const previousComent = (coments:{ id:number, Title: string, Coment: string, Author: string }[]) =>{
        if (coment["id"] === 1){
            setComent(coments[coments.length - 1])
        }
        else {
            setComent(coments[coment["id"] -2])
        }
    }

    const nextComent = (coments:{ id:number, Title: string, Coment: string, Author: string }[]) =>{
        if (coment["id"] === coments[coments.length - 1]["id"]){
            setComent(coments[0])
        }
        else {
            setComent(coments[coment["id"]])
        }
    }



    return (
        <div css={block}>
            <div css={Section}>
                <MDBIcon icon="chevron-left" style={{ color: "#B08D72", cursor:"pointer" }} size='5x' onClick={() => previousComent(coments)}/>
                <div css={textBlock}>
                    <p css={title}>  “  {coment["Title"]}  ” </p>
                    <p css={paragraph}> {coment["Coment"]} </p>
                    <p css={author}> {coment["Author"]} </p>
                </div>
                <MDBIcon icon="chevron-right" style={{ color: "#B08D72", cursor:"pointer" }} size='5x' onClick={() => nextComent(coments)} />
            </div>
        </div>

    );
};

export default Coments;