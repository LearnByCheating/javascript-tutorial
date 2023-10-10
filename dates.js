/* eslint-disable no-unused-vars, object-curly-newline, max-len, no-debugger */
const topicId = 1;

// 1. Date data type and Global Object.
if (topicId === 1) {
  const dateObj = new Date('Dec 31, 2025 UTC');
  let view = typeof dateObj; // object
  view = dateObj.constructor; // Date
  view = dateObj instanceof Date; // true
  view = Object.getPrototypeOf(dateObj); // Date.prototype
  view = Object.getOwnPropertyNames(Date); // returns array of Date static properties
  view = Object.getOwnPropertyNames(Date.prototype); // returns array of Date instance properties
  debugger;
}

// 2. Create dates.
if (topicId === 2) {
  // Create date object set to current date/time.
  let dateObj = new Date(); // Current date object
  const dateStr = Date(); // String: 'Ddd Mmm DD YYYY HH:MM:SS GMT+/-HHMM'
  // Create date object.
  // All the below dates are Dec 31, 2025, midnight UTC.
  dateObj = new Date(1767139200000);
  // Local time zone is default.
  dateObj = new Date('Dec 31, 2025 UTC');
  // Pacific Std time
  dateObj = new Date('Dec 30, 2025, 16:00:00 PST');
  // Eastern Std time
  dateObj = new Date('Dec 30, 2025, 19:00:00 EST');
  // YYYY-MM-DD format uses UTC time zone by default.
  dateObj = new Date('2025-12-31');
  // new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
  dateObj = new Date(2025, 11, 30, 16, 0, 0);
  debugger;
}

// 3. Date Static Methods
if (topicId === 3) {
  // ISO 8601 Format. Time defaults to 00:00:00. Timezone defaults to Zero offset from UTC time zone. Returns 1767139200000
  let timestamp = Date.parse('2025-12-31');
  timestamp = Date.parse('2025-12-31T00:00:00Z'); // Z means zero offset
  timestamp = Date.parse('2025-12-31T00:00:00+00:00'); // Zero offset
  timestamp = Date.parse('2025-12-30T16:00:00-08:00'); // Offset -8 hours from UTC

  // Non-standard date strings
  // Local time zone default:
  timestamp = Date.parse('31 Dec, 2025');
  timestamp = Date.parse('Dec 31, 2025');
  timestamp = Date.parse('Dec 31, 2025, 00:00:00');
  // Set time zone
  timestamp = Date.parse('Dec 31, 2025, 00:00:00 PST');
  timestamp = Date.parse('Dec 31, 2025, 00:00:00 -08:00');

  // UTC Time zone
  timestamp = Date.UTC(2025, 11, 31); // 1767139200000; For Dec 31, 2025.  Time defaults to 00:00:00.
  timestamp = Date.UTC(2025, 11, 31, 23, 59, 59); // 1767225599000; For Dec 31, 2025 end of day UTC time zone.

  timestamp = Date.now(); // Returns current timestamp
  debugger;
}

// 4. Instance methods: Get timestamp or date string
if (topicId === 4) {
  const dateObj = new Date('2025-09-01 17:30:00 UTC'); // Create date object using UTC time zone.
  // Return timestamp (number of milliseconds since 1/1/1970 UTC.): 1756747800000
  let timestamp = dateObj.valueOf();
  timestamp = dateObj.getTime();

  // Returns date string in local format:
  let dateStr = dateObj.toString(); // 'Mon Sep 01 2025 10:30:00 GMT-0700 (Pacific Daylight Time)'
  dateStr = dateObj.toDateString(); // 'Mon Sep 01 2025'
  dateStr = dateObj.toTimeString(); // '10:30:00 GMT-0700 (Pacific Daylight Time)'
  dateStr = dateObj.toUTCString(); // 'Mon, 01 Sep 2025 17:30:00 GMT'
  dateStr = dateObj.toISOString(); // '2025-09-01T17:30:00.000Z'
  dateStr = dateObj.toISOString().slice(0, 10); // '2025-09-01'
  dateStr = dateObj.toJSON(); // '2025-09-01T17:30:00.000Z'
  debugger;
}

// 5. Instance methods: Get Locale String
if (topicId === 5) {
  // Create date object. Defaults to local time zone.
  const dateObj = new Date('2025-09-01 17:30:00');
  // toLocaleString()
  // Display date based on the default system locale.
  let dateStr = dateObj.toLocaleString(); // default system locale '9/1/2025, 5:30:00 PM'
  // Display date using English-US locale, then using English-Great Britain locale.
  dateStr = dateObj.toLocaleString('en-US'); // '9/1/2025, 5:30:00 PM'
  dateStr = dateObj.toLocaleString('en-GB'); // '01/09/2025, 17:30:00'
  // Set locale to en-US and display date/time as: '09/01/2025, 05:30:00 PM'
  dateStr = dateObj.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  // Set locale to en-US and display date/time as: '9/1/25, 5:30:00 PM'
  dateStr = dateObj.toLocaleString('en-US', { year: '2-digit', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  // Set locale to en-US and display date/time as: 'Sep 1, 2025, 5:30 PM'
  dateStr = dateObj.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  // Set locale to en-US and display date/time as: 'Thursday, September 1, 2025, 5:30 PM Pacific Daylight Time'
  dateStr = dateObj.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: '2-digit', timeZoneName: 'long'});

  // toLocalDateString
  // Display date based on the default system locale.
  dateStr = dateObj.toLocaleDateString(); // (e.g., en-US default) '9/1/2025'
  // Display date using English-US locale, then using English-Great Britain locale.
  dateStr = dateObj.toLocaleDateString('en-US'); // '9/1/2025'
  dateStr = dateObj.toLocaleDateString('en-GB'); // '01/09/2025'
  // Set locale to en-US and display date/time as: '09/01/2025'
  dateStr = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  // Set locale to en-US and display date/time as: '9/1/25'
  dateStr = dateObj.toLocaleDateString('en-US', { year: '2-digit', month: 'numeric', day: 'numeric' });
  // Set locale to en-US and display date/time as: 'Sep 1, 2025'
  dateStr = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  // Set locale to en-US and display date/time as: 'Thursday, September 1, 2025'
  dateStr = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  // toLocalTimeString
  dateStr = dateObj.toLocaleTimeString(); // "5:30:00 PM"
  dateStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // "5:30 PM"
  dateStr = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }); // "05:30 PM"
  debugger;
}

// 6. Instance methods: Get number values from the date object
if (topicId === 6) {
  const dateObj = new Date('2025-12-31 09:30:00 -8:00');

  // Get local time zone
  let dateNum = dateObj.getFullYear(); // 2025
  dateNum = dateObj.getMonth(); // 11; 0 indexed. 11 is December.
  dateNum = dateObj.getDate(); // 31;
  dateNum = dateObj.getDay(); // 6; 0 indexed. 6 is Saturday.
  dateNum = dateObj.getHours(); // 9; Returns number 0 to 23.
  dateNum = dateObj.getMinutes(); // 30; Returns number 0-59.
  dateNum = dateObj.getTimezoneOffset(); // 480; Returns the difference, in minutes, from local time zone to UTC.

  // get UTC time zone
  dateNum = dateObj.getUTCFullYear(); // 2025
  dateNum = dateObj.getUTCMonth(); // 11; 0 indexed. 11 is December.
  dateNum = dateObj.getUTCDate(); // 31
  dateNum = dateObj.getUTCDay(); // 6; 0 indexed. 6 is Saturday.
  dateNum = dateObj.getUTCHours(); // 17; Returns number 0 to 23.
  dateNum = dateObj.getUTCMinutes(); // 30; Returns number 0-59.
}

// 7. Instance methods: Set Date and Time Values in Date objects
if (topicId === 7) {
  let dateObj = new Date('2025-12-31 09:30:00 -8:00');
  // Set date/time using local time zone
  dateObj.setFullYear(2026, 0, 1); // Jan 1, 2026 9:30 -8:00
  dateObj.setMonth(1, 2); // Feb 2, 2026 9:30 -8:00
  dateObj.setDate(3); // Feb 3, 2026 9:30 -8:00
  dateObj.setDate(0); // Jan 31, 2026 9:30 -8:00. Sets date to the last date of the previous month
  dateObj.setHours(8, 5, 30); // Jan 31, 2026 8:05:30 -8:00
  dateObj.setMinutes(0, 0); // Jan 31, 2026 8:00:00 -8:00

  dateObj = new Date('2025-12-31 09:30:00 UTC');
  // Set date/time using UTC
  dateObj.setUTCFullYear(2026, 0, 1); // Jan 1, 2026 9:30 UTC.
  dateObj.setUTCMonth(1, 2); // Feb 2, 2026 9:30 UTC
  dateObj.setUTCDate(3); // Feb 3, 2026 9:30 UTC
  dateObj.setUTCDate(0); // Jan 31, 2026 8:05:30 UTC
  dateObj.setUTCHours(8, 5, 30); // Jan 31, 2026 0:05:30 UTC
  dateObj.setUTCMinutes(0, 0); // Jan 31, 2026 0:00:00 UTC
  debugger;
}
