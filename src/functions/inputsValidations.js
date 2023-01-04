function inputsValidation(input, type) {
    if (typeof input === 'string') {
        input = input.trim();
    }

    let payload = {
        value: input,
        error: false,
        notification: ''
    };

    switch (type) {
        case 'name':
            if (!input) {
                payload = { ...payload, error: true, notification: 'name input is empty' };
                break;
            }

            const newName = input[0].toUpperCase() + input.slice(1).toLowerCase();
            payload = { ...payload, value: newName };

            break;

        case 'age':
            if (!input) {
                payload = { ...payload, error: true, notification: 'age input is empty' };
                break;
            }

            const minAge = 18;

            if (parseInt(input) < minAge) {
                payload = { ...payload, error: true, notification: `minimum age must be ${minAge}` };
                break;
            }

            break;

        default:
            break;
    }

    return payload;
}

export default inputsValidation;