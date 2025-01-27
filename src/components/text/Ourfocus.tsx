import styled from "styled-components";

// TypeScript interface for props
interface OurfocusProps {
    text: string;
}

const OurfocusText = styled.text`
    font-family: Barlow Condensed;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: left;
    color: white;
    /* @media only screen and (max-width: 1460px) {
        max-width: 616px;
    }
    @media only screen and (max-width: 1047px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 430px) {
        font-size: 17px;
    } */
`;


// Functional component
const Ourfocus: React.FC<OurfocusProps> = ({ text }) => {
    return (
       <OurfocusText>{text}</OurfocusText>
    );
};

export default Ourfocus;