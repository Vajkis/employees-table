function TablePagesList() {
    return (
        <nav style={{ display: 'flex', gap: '10px' }}>
            <button>{'<'}</button>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '10px' }}>
                <li>1</li>
                <li>2</li>
                <li>...</li>
                <li>4</li>
            </ul>
            <button>{'>'}</button>
        </nav>
    )
}

export default TablePagesList;