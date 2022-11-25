function SVGcheck({ className, style }) {
    return (
        <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M6,13 l5,4 l9,-12" />
        </svg>
    )
}

export default SVGcheck;