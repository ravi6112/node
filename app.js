console.log('Starting app');

const fs = require('fs');
const yargs = require('yargs');

const note = require('./note.js');
const titleOptions = {
    describe : 'Title of note',
    demand : true,
    alias : 't'
};
const bodyOptions ={
    describe : 'Body of note',
    demand : true,
    alias : 'b'
};
var yarg = yargs.command('add', 'Add a note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list' , 'List notes')
    .command('read', 'Read all notes',{
        title: titleOptions
    })
    .command('remove', 'Remove note',{
        title: titleOptions
    })
    .help()
    .argv;
var command = yarg._[0];

console.log('command: ' ,command);
console.log('yargs: ', yarg);

if (command === 'add'){
    var notes=note.addNote(yarg.title, yarg.body);
    if (notes){
        console.log('note created');
        note.logNote(notes);
    }
    else{
        console.log('Already title is created what the fuck am i typing');
    }
}
else if (command ==='list'){
   var allNotes = note.getAll();
   console.log(`Printing ${allNotes.length} note(s).`);
   allNotes.forEach((notes)=> note.logNote(notes));
}
else if (command === 'read')
{
    var readed =note.readed(yarg.title);
    if (readed)
    {
        console.log('note found');
        note.logNote(readed);
    }
    else{
        console.log('This note is there bitch');
    }
}
else if (command === 'remove')
{
    var removeNote = note.remove(yarg.title);
    var message = removeNote ? 'note was removed' : 'note not found asshole';
    console.log(message);
}
else{
    console.log('do somehting else');
}