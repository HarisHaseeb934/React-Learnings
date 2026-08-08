export const FAQ = ({question, answer, isActive, onToggle}) => {
    return(
        <li className="bg-[rgb(33,48,60)] p-4 border-l-1 border-white m-2 text-white">
            <div className="flex items-center justify-between">
                <p>{question}</p>
                <button className={`p-3 ${isActive ? "bg-red-500" : "bg-green-500"}`} onClick={onToggle}>{isActive ? "Close" : "Show"}</button>
            </div>
            <p className="pt-3">{isActive && answer}</p>
        </li>
    )
}