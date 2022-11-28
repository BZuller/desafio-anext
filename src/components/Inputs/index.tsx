import React from 'react';
import Tooltip from '../Tooltip';

type props = {
  onClick?: () => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
  value?: string | number;
  error: boolean;
  errorMessage: string;
  className: string;
};

export default function Input({
  type,
  className,
  placeholder,
  onClick,
  onChange,
  error,
  errorMessage,
}: props): React.ReactElement {
  return (
    <Tooltip show={error} message={errorMessage}>
      <input type={type} className={className} placeholder={placeholder} onClick={onClick} onChange={onChange} />
    </Tooltip>
  );
}
