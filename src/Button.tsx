import React, {HTMLAttributes, ReactNode} from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';

}

export const Button = ({children,variant = 'primary', ...props}: Props) => {
    return(
        <button {...props} style={{backgroundColor: variant === 'primary' ? 'blue' : 'gray',color: 'white', border: 'none',fontSize: '14px',padding: '5px 20px',borderRadius: '30px' }}>
            {children}
        </button>

    )
}
