function setPageSize(size) {
    if (size) {
        localStorage.setItem('pageSize', size);
    }
}

export default setPageSize;