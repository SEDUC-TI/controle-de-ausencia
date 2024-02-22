import { MouseEventHandler } from 'react';

interface inputProps {
    variant?:string;
    label: string;
    nome: string;
    id: string;
    borderColor: string;
    important?: boolean ;
    type?:string;
    width?:string;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export default inputProps;