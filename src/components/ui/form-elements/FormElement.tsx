import './FormElement.css';

type FormElementProps = {
children?: React.ReactNode;
description?: string;
};

export const FormElement = ({ children, description }: FormElementProps) => {
    return (
        <div className="form-element-wrapper">
        {children}
        {description && (
            <div className="form-element-description">{description}</div>
        )}
        </div>
    );
};