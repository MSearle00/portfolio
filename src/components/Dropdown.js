import React, {useState, useRef, useEffect} from 'react'
import './Dropdown.css'

export default function Dropdown(
    {options, prompt, value, onChange}) {


    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const ref = useRef(null);

    function filter(options){
        return options.filter(option => option.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    function displayValue() {
        if (query.length > 0) return query
        if (value) return value
        return "";
    }

    useEffect(() => {
        ["click", "touchend"].forEach(e => {
            document.addEventListener(e, toggle)
        })
        
        return () => ["click", "touchend"].forEach(e =>{ document.removeEventListener(e, toggle);
        })
    }, [])

    function toggle(e) {
        setOpen(e && e.target === ref.current)
    }

    function selectOption(option) {
        setQuery("");
        onChange(option);
        setOpen(false);
    }

    return (
        <div>
            <div className="control">
            <div className="selectedValue">
            <input type="text"
            ref={ref}
            placeholder = {value ? value : prompt}
            value = {displayValue()}
            onChange={e => {
                setQuery(e.target.value)
                onChange(null)}
            }
            onTouchEnd={toggle}
            onClick={toggle}/>
            </div>
            <div className={`arrow ${open ? "open" : null}`}></div>
        </div>
        <div className={`options ${open ? "open" : null}`}>
            {filter(options).map((option) => (
            <div className={ `option ${value === option ? "selected": null}`}
            onClick={() => selectOption(option)}
            onTouchEnd={() => selectOption(option)}
            >{option}</div>
        ))}
        </div>
        </div>
    )
}
