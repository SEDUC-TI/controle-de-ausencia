
interface buttonProps {
    text: string;
    id: string;
    backgroundColor?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    width?:string;
    image?:string | undefined;
    textColor?: string;
};

export default buttonProps;