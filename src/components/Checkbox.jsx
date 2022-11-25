import SVGcheck from "../assets/svg/SVGcheck";

function Checkbox(checked) {

    return (
        <div style={{
            display: 'inline-block',
            margin: '3px',

            width: '12px',
            height: '12px',

            borderRadius: '15%',
            border: checked ? 'solid 1.5px #0075FF' : 'solid 1.5px #767676',

            backgroundColor: checked ? '#0075FF' : '#fff',

            position: 'relative'
        }}>
            <SVGcheck style={{
                widht: '100%',
                height: '100%',

                position: 'absolute',
                top: 0,
                left: 0,

                color: '#fff'
            }} />
        </div>
    )
}

export default Checkbox;