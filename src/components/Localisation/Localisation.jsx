import { useState } from "react";
import { Select } from "./Localisation.styled";



export const Localisation = () => {

    const languages = [
        {code: 'UA'},
        {code: 'EN'},
    ];

    const [code, setCode ] = useState('UA');

    const handeChange = (e) => {
        setCode(e.target.value);
    }

    const optionLang = languages.map(({ code}, id) => {
        return (
            <option key={id} value={code}>{code}</option>
        )
    })

    return (
        <Select value={code} onChange={handeChange}>
            {optionLang}
        </Select>
    )

}