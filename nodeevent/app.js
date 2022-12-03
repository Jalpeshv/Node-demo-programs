const EventEmmiter = require('events');

const emmiter  = new EventEmmiter();

// Add Event Listener
emmiter.addListener("myonclick",function(earg){
    console.log("Event Occured",earg);
});

// Add Event Listener
//emmiter.addListener("NewEvent",(earg) => {
//    console.log("Event Occured",earg);
//});


// raise an event
emmiter.emit("myonclick",{eventName: "FistEvent", eventId: 1});

