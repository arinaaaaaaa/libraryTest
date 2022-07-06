import { useEffect, useState } from "react"
import "../../styles/universal/DropdownMenu.css"

export default function DropdownMenu(optionsArray) {

    const options = optionsArray;
    const [isActive, setActive] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    if (options != null) {
        return (
            <div className="dropdown">
                <div className="header" onClick={() => setActive(!isActive)}>{selected}</div>
                {!isActive ?
                    <div className="content">
                        { options.map((option) => (
                            <div className="item" onClick={() => {
                                setSelected(option)
                                setActive(false)}}>
                                {option}
                            </div>
                        ))}
                    </div>
                : null}
            </div>
        )
    }
    else return null;
}