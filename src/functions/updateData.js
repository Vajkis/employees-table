function updateData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

export default updateData;