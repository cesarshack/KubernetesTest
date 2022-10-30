const Web = require("webwebweb");
Web.APIs["/countdown"] = ( qs, body, opts ) => {
    const christmas = new Date( "December 25, 2022 00:00:00" );
    const today = new Date();
    const diff = christmas - today;
    const days = Math.floor( diff / ( 24 * 60 * 60_000 ));
    const mins = Math.floor( diff / ( 60 * 60_000 )) - (days * 60 );
    const secs = Math.floor( diff / ( 60_000 )) - ( days * 60 * 60 + mins * 60);
    return {
        christmas,
        today,
        timeUntilMS: diff,
        timeUntilS: diff / 1000,
        timeUntilM: diff / 60000,
        timeUntilH: diff / ( 60 * 60000 ),
        timeUntilD: diff / ( 24 * 60 * 60000 ),
        days, mins, secs,
    };
};
Web.Run( 8080 );