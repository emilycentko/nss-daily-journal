const contentTarget = document.querySelector(".formContainer")

export const JournalFormComponent = () => {

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
                <option>Sad</option>
                <option>Not too great</option>
                <option>Okay</option>
                <option>Pretty good</option>
                <option>Great</option>
            </select>
        
            <input type="submit" value="Record Journal Entry" id="submitButton"></fieldset>

        </fieldset>
        </form>
    
    
    `

}