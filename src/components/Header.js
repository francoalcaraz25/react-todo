import ColorPicker from "./ColorPicker.js";

const Header = ({title, color, onChangeTitle, onChangeColor}) => {
    return(
        <div className="header" style={{backgroundColor: color}}>
            <input id="title"
                value={title}
                onChange={ev => onChangeTitle(ev.target.value)}
                placeholder="Name your List..."/>
            <ColorPicker color={color} onChangeColor={onChangeColor}/>
        </div>
    );
}

export default Header;