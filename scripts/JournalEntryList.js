import { useJournalEntries, getEntries } from './JournalDataProvider.js'
import { JournalEntryComponent } from './JournalEntry.js'

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useJournalEntries()

        let entriesHTMLRepresentation = ""

        for (const entry of entries) {
        entriesHTMLRepresentation += JournalEntryComponent(entry)
        }
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += `
        <div class="entry__list">
            ${entriesHTMLRepresentation}
        </div>
        `
    })
}

eventHub.addEventListener("journalStateChanged", clickEvent => {
    getEntries()
    .then(EntryListComponent)
})
