import styled from "styled-components";

// TypeScript interface for props
interface SalesProps {
    text: string;
}

const SaleDiv = styled.div`
    font-family: Barlow Condensed;
    font-size: 65px;
    font-weight: 700;
    line-height: 78px;
    color: white;
`;
// Functional component
const Sales: React.FC<SalesProps> = ({ text }) => {
    return (
       <SaleDiv>
            {text}
       </SaleDiv>
    );
};

export default Sales;