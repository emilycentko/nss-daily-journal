let moods = []

export const useMoods = () => {
    return moods.slice()
}

export const getMoods = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") 
        .then(moods => moods.json()) 
        .then(parsedMoods => {
            moods = parsedMoods
        })
}