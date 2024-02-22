import inputProps from './../../shared/interface/inputProps';

const Input: React.FC<inputProps> = ({variant='primary', id, label, important = true, nome, borderColor, type = 'text', width='w-auto', onClick}: inputProps) => {
  if(variant=='secondary'){
    return(
      <div className={`flex flex-col justify-start gap-1 ${width} `} onClick={onClick}>
          <label className='text-sm' htmlFor={id}>{label}{important ? <span className="text-red"> *</span> : null}</label>
          <input type={type} name={nome} id={id} className={`${borderColor} focus:outline-none rounded-xl border-solid border-2 h-12 px-1.5 text-base`}/>
      </div>
    );
  }else if(variant=='tertiary'){
    return(
      <div>
      </div>
    );
  } else {
    return (
      <div className={`flex flex-col justify-start gap-1 ${width} `} onClick={onClick}>
          <label className='text-sm' htmlFor={id}>{label}{important ? <span className="text-red"> *</span> : null}</label>
          <input type={type} name={nome} id={id} className={`${borderColor} focus:outline-none rounded-xl border-solid border h-10 px-1.5 text-base`}/>
      </div>
    );
  };
};

export default Input;
