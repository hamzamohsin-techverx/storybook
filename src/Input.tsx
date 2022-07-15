import React, {HTMLAttributes, ReactNode} from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary'| 'link' | 'large' | 'small';

}

export const Input = ({children,variant = 'primary', ...props}: Props) => {
    return(
        <Input {...props} type="text" placeholder="Custom Input" />

    )
}
