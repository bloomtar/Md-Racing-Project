// TypeScript interface for props
interface GreenButtonProps {
    text: number;
}


// Functional component
const GreenButton: React.FC<GreenButtonProps> = ({ text }) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default GreenButton;