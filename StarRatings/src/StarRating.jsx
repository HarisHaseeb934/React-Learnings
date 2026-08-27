import { useState } from "react"
import Star from "../Star";

const StarRating = ({rating = 0, readOnly = false, onChange, max = 5}) => {
    const [internalRating, setInternalRating] = useState(rating);
    const [hoverRating, setHoverRating] = useState(null);

    const displayValue = hoverRating !== null ? hoverRating : internalRating;
    const percentage = (displayValue / max ) * 100;

    const calculateRating = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        console.log("Rect: " + rect);
        const pos = e.clientX - rect.left;
        console.log("Pos: " + pos);
        const percentage = Math.min(Math.max(pos / rect.width, 0),1);
        console.log("Percentage: " + percentage);
        const score = percentage * max;
        console.log("Score: " + score);
        const fill = Math.ceil(score / 0.1) * 0.1;
        console.log("Fill: " + fill);

        return Math.min(Math.max(fill,0.1),max);
    }

    const handleMouseMove = (e) => {
        if(readOnly) return;
        const score = calculateRating(e);
        setHoverRating(score);
    }

    const handleMouseLeave = (e) => {
        if(readOnly) return;
        setHoverRating(null);
    }

    const handleClick = (e) => {
        if(readOnly) return;
        const score = calculateRating(e);
        setInternalRating(score);
        onChange?.(score);
    }

  return (
    <div>
        <button disabled = {readOnly} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick} className={`relative ${readOnly ? "cursor-default" : "cursor-pointer"}`}>
            <div className="flex pointer-events-none">
                {Array.from({length: max}).map((_, index) => {
                    return <Star key={`gray-${index}`}/>
                })}
            </div>
            <div style={{width: `${percentage}%`}} className={`absolute top-0 left-0 flex pointer-events-none whitespace-nowrap overflow-hidden`}>
                {Array.from({length: max}).map((_, index) => {
                    return <Star key={`gold-${index}`} className={`text-amber-400`}/>
                })}
            </div>
        </button>

        <span>{displayValue.toFixed(1)}</span>
    </div>
  )
}

export default StarRating