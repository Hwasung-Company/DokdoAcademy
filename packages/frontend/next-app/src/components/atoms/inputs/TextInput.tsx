import {TextField} from '@mui/material'
import {ForwardedRef, useState} from 'react'
import {styled} from '@mui/styles'

const StyledTextField = styled(TextField)({
    width: '100%',
})

type TextInputProps = {
    label: string;
    value: string | number;
    onChange: (value: string | number) => void;
    type?: string;
    helperText?: string;
    placeholder?: string;
    ref?: ForwardedRef<HTMLInputElement>;
    required?: boolean;
}

const TextInput = ({ label, value, onChange, ref, type, helperText, placeholder, required }: TextInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <StyledTextField
            size={'small'}
            label={label}
            value={value}
            type={type? type : 'text'}
            placeholder={placeholder}
            onChange={handleChange}
            helperText={helperText}
            ref={ref}
            required={required}
        />
    )
}

export default TextInput;
