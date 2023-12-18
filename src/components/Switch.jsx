import { forwardRef } from "react"
import { Check, X } from "react-feather"

const Switch = forwardRef((props, forwardRef) => (
    <label className="cursor-pointer">
        <input type="checkbox" className="hidden" ref={forwardRef} {...props} />
        <div className={`w-14 p-1 rounded-full ${props.checked ? "bg-blue-200" : "bg-gray-200"}`}>
            <div className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 text-white ${props.checked ? "bg-blue-500 translate-x-6" : "bg-gray-400 -rotate-180"}`}>
                {props.checked ? <Check size={20} /> : <X size={20} />}
            </div>
        </div>
    </label>
))

export default Switch