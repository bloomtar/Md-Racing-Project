import styled from "styled-components";

// Styled button component
const Button = styled.button`
  background-color: #85FF10;
  width: 185px;
  height: 58px;
  font-weight: 700; /* Changed from '700px' to '700' */
  font-size: 21px;
  line-height: 25.2px;
  text-align: center;
  color: black;
  top: 700px;
  left: 669px;
  font-family: "Barlow Condensed", serif;
  margin-top: 50px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: #9be79f;
  }

  @media screen and (max-width: 885px) {
        width: 155px;
        height: 60px;
    }

`;


// TypeScript interface for props
interface GreenButtonProps {
  text: string;
}

// Functional component
const GreenButton: React.FC<GreenButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default GreenButton;