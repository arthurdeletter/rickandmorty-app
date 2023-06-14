import { ChangeEventHandler } from "react";
import './TextInput.css';

type InputProps = {
  prefix?: string;
  suffix?: string;
  value: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const TextInput = ({
  prefix,
  suffix,
  value,
  name,
  placeholder,
  onChange,
  type,
  required,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <div className="input-wrapper">
      {prefix && <span className="fixture prefix">{prefix}</span>}
      <input
        type={type ?? "text"}
        value={value}
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...props}
      />
      {suffix && <span className="fixture postfix">{suffix}</span>}
    </div>
  );
};