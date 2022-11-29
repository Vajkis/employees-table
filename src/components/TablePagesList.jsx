function TablePagesList() {
    return (
        <nav style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', marginTop: '10px', alignItems: 'center' }}>
            <button style={{ aspectRatio: '1 / 1' }}>{'<'}</button>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '10px', padding: 0 }}>
                <li>1</li>
                <li>2</li>
                <li>...</li>
                <li>4</li>
            </ul>
            <button style={{ aspectRatio: '1 / 1' }}>{'>'}</button>
        </nav>
    )
}

export default TablePagesList;