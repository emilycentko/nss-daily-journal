const eventHub = document.querySelector(".container")

let journalEntries = []

export const useJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(entries => entries.json())  // Parse as JSON
        .then(parsedEntries => {
            console.table(parsedEntries)
            journalEntries = parsedEntries
        })
}

export const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("journalStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}

export const saveJournalEntry = (entry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/entries?_expand=mood", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(getEntries)  // <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}
