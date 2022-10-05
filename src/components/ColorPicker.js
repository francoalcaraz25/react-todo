
const ColorPicker = ({color, onChangeColor}) => {
    return (
        <span className="color-picker" style={{backgroundColor: color}}>
            <input id="header-color-picker" type="color"
                value={color}
                onChange={ev => onChangeColor(ev.target.value)}
            />
        </span>
    );   
}

export default ColorPicker;