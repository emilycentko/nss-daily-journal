/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "01/4/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Good"
    },
    {
        id: 2,
        date: "1/7/2021",
        concept: "GitHub Workflow",
        entry: "Worked on indivdual and group project GitHub workflow for pushing branches from command to GitHub",
        mood: "Ok"
    },
    {
        id: 3,
        date: "1/14/2021",
        concept: "Java Script",
        entry: "Exporting data from mulitple objects and functions in JavaScript",
        mood: "Good"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}