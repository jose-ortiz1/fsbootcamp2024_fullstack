const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//listening for that event
myEmitter.addListener('cricket', () => {
    console.log('Cricket Match is happening. Please join');
})

//listening for that event
myEmitter.on('cricket', () => {
    console.log('Cricket Match is happening. Please register your team');
})

//manually triggering the event
myEmitter.emit('cricket');


myEmitter.on('error', (args) => {
    console.log(args.message);
})


myEmitter.emit('error', {message: 'Your code is wrong', line: '20'});