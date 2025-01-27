import styled from "styled-components";

// TypeScript interface for props
interface MadDogProps {
    text: string;
}

const MadDogDiv = styled.div`
    /* width: 392px; */
    width: 100%;
    height: 81px;
    top: 357px;
    left: 669px;
    text-align: left;
    color: #FFFFFF;
    margin-top: 134px;

    @media screen and (max-width: 1040px) {
        margin-top: 100px;
    }

    @media screen and (max-width: 460px) {
        margin-top: 30px;
    }
`;

const MadDogText = styled.text`
    font-family: Barlow Condensed;
    font-size: 70px;
    font-weight: 700;
    line-height: 84px;
    text-align: left;
    @media screen and (max-width: 460px) {
        
    }
`;
// Functional component
const MadDg: React.FC<MadDogProps> = ({ text }) => {
    return (
        <MadDogDiv>
            <MadDogText>{text}</MadDogText>
        </MadDogDiv>
    );
};

export default MadDg;