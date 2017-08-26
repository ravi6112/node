console.log('Starting note.js');

const fs = require('fs');


var fetchNote = ()=>{
    try {
        var noteString = fs.readFileSync('note_data.json');
        return JSON.parse(noteString);
    }
    catch (e) {
        return [];
    }
};
var saveNote = (notes) =>{
    fs.writeFileSync('note_data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNote();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }
};
var readed = (title)=>{
    var readNote = fetchNote();
    var filteredNote = readNote.filter ((note) => note.title === title);
    return filteredNote[0];
};

var getAll = () => {
return fetchNote();
};

var remove = (title)=>{
    var notes = fetchNote();
    var filteredNotes = notes.filter((note) => note.title !== title);
    console.log(filteredNotes);
    saveNote(filteredNotes);
    return notes.length!== filteredNotes.length;
};

var logNote = (notes)=> {
    console.log('--');
    console.log(`Title = ${notes.title}`);
    console.log(`Body = ${notes.body}`);
};

module.exports= {
    addNote,
    getAll,
    remove,
    readed,
    logNote
};