import buttonProps from '../../shared/interface/buttonProps';

const Button: React.FC<buttonProps> = ({text, id, backgroundColor , type='button' , width='w-auto', image=undefined, textColor='white'}:buttonProps) => {
  return (
    
    <button id={id} className={`flex flex-row gap-1 items-center justify-center ${backgroundColor} ${width} h-16 rounded-xl text-xl font-bold text-${textColor}`} type={type} >
      <img src={image} alt="" />
      {text}
    </button>
    
  );
};

export default Button;
