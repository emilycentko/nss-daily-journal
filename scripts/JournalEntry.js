export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.concept}</h3>
            <p>${entry.date}</p>
            <p>${entry.entry}</p>
            <p>Mood: ${entry.mood.label}</p>
        </section>
    `
}