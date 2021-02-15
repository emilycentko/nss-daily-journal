let journalEntries = []

export const useJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(entries => entries.json())  // Parse as JSON
        .then(parsedEntries => {
            console.table(parsedEntries)
            journalEntries = parsedEntries
        })
}
