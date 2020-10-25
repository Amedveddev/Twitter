export const LOAD_ACTUAL = 'LOAD_ACTUAL';
export const PUT_ACTUAL = 'PUT_ACTUAL';

export const loadActual = () => {
    return {
        type: LOAD_ACTUAL
    }
}

export const putActual = (actual: any) => {
    return {
        type: PUT_ACTUAL,
        payload: actual
    }
}