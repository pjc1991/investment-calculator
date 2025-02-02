import {useState} from "react";

export default function BasicNumberInput({label, id, initialValue, onEdit}) {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value);
        onEdit(id, e.target.value);
    }



    return (
        <>
            <label htmlFor={id} className="col-span-2">
                {label}
            </label>
            <input id={id} type="number" className="col-span-2 bg-green-900 text-white p-2 rounded-lg border border-gray-300"
                   value={value} onChange={handleChange}
            />
        </>
    )
}