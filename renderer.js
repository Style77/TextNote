document.getElementById("pin").addEventListener('click', function() {
    window.electronAPI.pinWindow()
    document.getElementById("pin").classList.toggle("active")
})

const notes = document.getElementById("allNotes").getElementsByClassName('note')

Array.from(notes).forEach(element => Array.from(element.getElementsByClassName("icons")).forEach(specificElement => 
    specificElement.addEventListener('click', function() {
        specificElement.parentElement.remove()
    }))
)

function createNewNote() {
    let note = document.createElement("div")
    note.setAttribute("class", "note")

    let icons = document.createElement("div")
    icons.setAttribute("class", "icons")

    let noteText = document.createElement("p")
    noteText.setAttribute("class", "note-text")
    noteText.innerHTML = document.getElementById("new-note").value

    let trashIcon = document.createElement("i")
    trashIcon.setAttribute("class", "fa-solid fa-trash-can")

    note.appendChild(icons)
    note.appendChild(noteText)
    icons.appendChild(trashIcon)

    document.getElementById("allNotes").appendChild(note)
    document.getElementById("new-note").value = ""

    icons.addEventListener('click', function() {
        icons.parentElement.remove()
    })
}

document.addEventListener("keypress", function(event) {
    if (event.key == "Enter"  && !event.shiftKey) {
        event.preventDefault()
    }
  });

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      createNewNote()
    }
  });