import ActivitiesImage1 from "./../images/Activity-1.jpg"
import ActivitiesImage2 from "./../images/Activity-2.jpg"
import ActivitiesImage3 from "./../images/Activity-3.jpg"


import { imageStyle, Section, Button, title, paragraph, textBlock, buttonText, imagesBlock } from "./../styles/activities"

/** @jsxRuntime classic */
/** @jsx jsx */


import { jsx, css, Global, ClassNames } from '@emotion/react'



type Props = {

}

const Activities: React.FC<Props> = (props) => {
    return (
        <div css={Section}>
            <div css={textBlock}>
                <p css={title}> Activities </p>
                <p css={paragraph}> Gmperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.</p>
            </div>
            <div css={imagesBlock}>
                <img alt='ActivitiesImage1' css={imageStyle} src={ActivitiesImage1} />
                <img alt='ActivitiesImage2' css={imageStyle} src={ActivitiesImage2} />
                <img alt='ActivitiesImage3' css={imageStyle} src={ActivitiesImage3} />
            </div>
            <Button><p css={buttonText}>Read more</p></Button>

        </div>
    );
};

export default Activities;