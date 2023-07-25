import {ColorSquare} from "./ColorSquare.jsx";

export const ColorList = ({colors}) => {
    const colorsToRender = colors?.slice(0, 3);
    return (
        <div>
            {colorsToRender.map((color, index) => (
                <ColorSquare key={index} color={color}/>))
            }
        </div>
    );
};