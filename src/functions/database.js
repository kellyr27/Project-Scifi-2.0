export const splitListsByType = (lists) => {
    /**
     * Splits lists into different types
     */

    const listsByType = {}

    for (const list of lists) {
        if (list.type in listsByType) {
            listsByType[list.type].push(list)
        }
        else {
            listsByType[list.type] = [list]
        }
    }

    return listsByType
}

export const textToURL = (text) => {
    return text.replaceAll(' ', '-').toLowerCase()
}


