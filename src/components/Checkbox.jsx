import SVGcheck from "../assets/svg/SVGcheck";

function Checkbox(checked) {

    return (
        <div style={{ margin: '3px', width: '12px', height: '12px', border: checked ? 'solid 1.5px #0075FF' : 'solid 1.5px #767676', borderRadius: '15%', position: 'relative', backgroundColor: checked ? '#0075FF' : '#fff' }}>
            <SVGcheck style={{ widht: '100%', height: '100%', position: 'absolute', top: 0, left: 0, color: '#fff' }} />
        </div>
    )
}

export default Checkbox;