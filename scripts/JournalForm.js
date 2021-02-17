import { saveJournalEntry } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodProvider.js"

const contentTarget = document.querySelector(".formContainer")
const eventHub = document.querySelector(".container")

export const moodSelect = () =>{
    getMoods()
    .then(() => {
        const moods = useMoods()
        JournalFormComponent(moods)
    })
}

export const JournalFormComponent = allMoods => {

    contentTarget.innerHTML = `
        <form action="" class="journalForm">
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id ="journalDate">

            <label for="conceptsCovered">Concepts Covered</label>
            <input type="text" name="conceptsCovered" id ="conceptsCovered">

            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" rows="10" cols="30"id ="journalEntry"></textarea>

            <label for="moodForDay">Mood for the Day</label>
            <select name="moodForDay" id ="moodForDay">
                ${
                    allMoods.map((mood) => {
                        return `<option value="${mood.id}">${mood.label}</option>`
                    }).join("")
                }
            </select>
        
            <input type="submit" value="Record Journal Entry" id="recordButton"></fieldset>

        </fieldset>
        </form>
    
    
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordButton") {
        const date = document.getElementById("journalDate").value
        const concept = document.getElementById("conceptsCovered").value
        const entry = document.getElementById("journalEntry").value
        const mood = document.getElementById("moodForDay").value

        const newEntry = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
        }

        saveJournalEntry(newEntry)
    }
})