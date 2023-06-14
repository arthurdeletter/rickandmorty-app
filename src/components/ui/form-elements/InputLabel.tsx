import './InputLabel.css'

  type InputLabelProps = {
    children?: React.ReactNode;
    optional?: boolean;
    error?: string;
    htmlFor: string;
  }
  
  export const InputLabel = ({
    children,
    optional,
    error,
    htmlFor,
    ...props
  }: InputLabelProps) => {
    return (
      <label className="label-wrapper" htmlFor={htmlFor} {...props}>
        {children}
        {error && <span className="error-indicator">{error}</span>}
        {optional && <span className="optional-indicator">(optional)</span>}
      </label>
    );
  };