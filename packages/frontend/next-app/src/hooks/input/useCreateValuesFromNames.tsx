// create value states obj from names in React

import { useState } from 'react'

type CreateValuesFromNamesProps = {
    names: string[];
}

const useCreateValuesFromNames = ({ names }: CreateValuesFromNamesProps) => {
    const [values, setValues] = useState(() => {
        const obj: {[key: string]: string | number} = {}
        names.forEach((name) => {
            obj[name] = ''
        })
        return obj
    })

    const handleChange = (name: string) => (value: string | number) => {
        setValues((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    return { values, handleChange }
}


export default useCreateValuesFromNames
