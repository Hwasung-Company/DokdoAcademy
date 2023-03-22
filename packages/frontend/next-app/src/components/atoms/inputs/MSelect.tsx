import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material'


type MSelectProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: {[key: string]: string};
    required?: boolean;
}

const MSelect = ({ label, value, onChange, options, required }: MSelectProps) => {
    const handleChange = (e: SelectChangeEvent) => {
        onChange(e.target.value)
    }

    return (
        <FormControl sx={{width: '100%'}} size={'small'}>
            <InputLabel id={'select'+label}>{label}</InputLabel>
            <Select
                labelId={'select'+label}
                value={value}
                onChange={handleChange}
                label={label}
                required={required}
            >
                {Object.keys(options).map((key) => {
                    return (
                        <MenuItem key={key} value={key}>{options[key]}</MenuItem>
                    )
                })
                }
            </Select>
        </FormControl>
    )
}

export default MSelect
