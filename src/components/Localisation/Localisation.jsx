import { useEffect, useState } from "react";
import { Select } from "./Localisation.styled";



export const Localisation = () => {

    const languages = [
        {code: 'UA'},
        {code: 'EN'},
    ];

    const [code, setCode ] = useState('UA');


    useEffect(() => {
        if (localStorage.getItem('COUNTRY_CODE')) {
            const prevCode = localStorage.getItem('COUNTRY_CODE')
            setCode(prevCode);
        } 
    }, []);

    const handleChange = (e) => {
        localStorage.setItem('COUNTRY_CODE', e.target.value);
        setCode(e.target.value);
    }

    const optionLang = languages.map(({ code}, id) => {
        return (
            <option key={id} value={code}>{code}</option>
        )
    })

    return (
        <Select onChange={handleChange} value={code}>
            {optionLang}
        </Select>
    )

}