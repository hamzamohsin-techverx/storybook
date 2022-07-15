import React, {HTMLAttributes, ReactNode} from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'filled' | 'outlined'| 'link' | 'large' | 'small';

}

export const Button = ({children,variant = 'filled', ...props}: Props) => {
    return(
        <button {...props} style={{backgroundColor: variant === 'filled' ? 'blue': variant === 'link' ? 'transparent' :variant === 'outlined' ? 'transparent' : 'gray',color: variant === 'link' ? 'blue' : variant === 'outlined' ? 'grey': 'white', border: variant === 'outlined' ? '1px solid grey': 'none',padding:variant === 'large' ? '10px 20px' : variant === 'small' ? '5px 10px' :'5px 20px',borderRadius: '30px',fontSize: variant === 'small' ? '12px' : '16px' }}>
            {children}
        </button>

    )
}