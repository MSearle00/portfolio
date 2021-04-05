import React, {useState} from 'react'

export default function Dropdown(
    {options, value, onChange}) {


    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")

    function filter(options){
        return options.filter(option => option[tag].toLowerCase().indexOf(query.toLowerCase()) > -1)
    }
    return (
        <div>
            <div className="control" onClick ={() => setOpen((current => !current))}>
            <div className="selectedValue"> {value ? value.name : "Please select a language"}</div>
            <div className={`arrow ${open ? "open" : null}`}></div>
        </div>
        <div className={`options ${open ? "open" : null}`}>
            {options.map((option) => (
            <div className="option"
            onClick={() => {
                onChange(option);
                setOpen(false);
            }}
            >{option}</div>
        ))}
        </div>
        </div>
    )
}
