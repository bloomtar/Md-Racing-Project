import styled from "styled-components";

// TypeScript interface for props
interface CardanoProps {
    text: string;
}

const CardanoText = styled.text`
    font-family: Barlow Condensed;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    color: white;
    
    @media screen and (max-width: 360px) {
        font-size: 28px;
    }

`;
// Functional component
const Cardano: React.FC<CardanoProps> = ({ text }) => {
    return (
        <CardanoText>{text}</CardanoText>
    );
};

export default Cardano;