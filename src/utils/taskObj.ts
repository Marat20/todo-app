export const task = (text: string, done: boolean, id = '') => {
    if (id) return {
        text,
        done,
        id
    }
    else return {
        text,
        done
    }
}