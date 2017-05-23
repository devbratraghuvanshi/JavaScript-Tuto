
// new Date() gives current date
 var date = new Date()
 console.log(date);

 //new Date(milliseconds
var dateFromMS = new Date(2000000000000);
 console.log(dateFromMS);

//new Date(dateString)
var d = new Date("October 13, 2014 11:13:00");
console.log(d);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
var d = new Date(99, 5, 24, 11, 33, 30, 0);
console.log(d);


var d = new Date();
// getDate()	Get the day as a number (1-31)
console.log(d.getDate());

// getDay()	Get the weekday as a number (0-6)
console.log(d.getDay());

// getFullYear()	Get the four digit year (yyyy)
console.log(d.getFullYear());

// getHours()	Get the hour (0-23)
console.log(d.getHours());

// getMilliseconds()	Get the milliseconds (0-999)
console.log(d.getMilliseconds());

// getMinutes()	Get the minutes (0-59)
console.log(d.getMinutes());

// getMonth()	Get the month (0-11)
console.log(d.getMonth());

// getSeconds()	Get the seconds (0-59)
console.log(d.getSeconds());

// getTime()	Get the time (milliseconds since January 1, 1970)
console.log(d.getTime());

//================
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[d.getDay()]);


// Compare Dates
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
console.log(text); 

//=================
// UTC Date Methods
// UTC date methods are used for working UTC dates (Universal Time Zone dates):

// Method	Description
// getUTCDate()	Same as getDate(), but returns the UTC date
// getUTCDay()	Same as getDay(), but returns the UTC day
// getUTCFullYear()	Same as getFullYear(), but returns the UTC year
// getUTCHours()	Same as getHours(), but returns the UTC hour
// getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	Same as getMonth(), but returns the UTC month
// getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds