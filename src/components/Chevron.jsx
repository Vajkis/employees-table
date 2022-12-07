function Chevron({ direction }) {

    if (direction === 'Down') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 10" stroke="#fff" fill="#fff" style={{ width: '24px' }}>
                <g data-name="Layer 2">
                    <path d="M 12 6.5 a 1 1 0 0 1 -0.71 -0.29 l -4 -4 a 1 1 0 1 1 1.42 -1.42 L 12 4.1 l 3.3 -3.18 a 1 1 0 1 1 1.38 1.44 l -4 3.86 a 1 1 0 0 1 -0.68 0.28 z" data-name="chevron-down" />
                </g>
            </svg>
        )
    }

    if (direction === 'Up') {
        return (
            < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 10" stroke="#fff" fill="#fff" style={{ width: '24px' }}>
                <g data-name="Layer 2">
                    <g data-name="chevron-up"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)" />
                        <path d="M 16 6.5 a 1 1 0 0 1 -0.71 -0.29 L 12 2.9 l -3.3 3.18 a 1 1 0 0 1 -1.41 0 a 1 1 0 0 1 0 -1.42 l 4 -3.86 a 1 1 0 0 1 1.4 0 l 4 4 a 1 1 0 0 1 0 1.42 a 1 1 0 0 1 -0.69 0.28 z" />
                    </g>
                </g>
            </svg >
        )
    }
}

export default Chevron;