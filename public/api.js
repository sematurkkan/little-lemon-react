
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    console.log('[API] fetchAPI called with:', date, 'Type:', typeof date);
    
    let result = [];
    
    // Convert string to Date if needed
    let dateObj;
    if (typeof date === 'string') {
        // date is a string like "2024-12-25"
        dateObj = new Date(date + 'T00:00:00');
        console.log('[API] Converted string to Date:', dateObj);
    } else if (date instanceof Date) {
        // date is already a Date object
        dateObj = date;
    } else {
        console.error('[API] Invalid date format:', date);
        return [];
    }
    
    // Get the day of month to use as seed
    let dayOfMonth = dateObj.getDate();
    console.log('[API] Day of month (seed):', dayOfMonth);
    
    let random = seededRandom(dayOfMonth);
    
    // Generate time slots
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    
    console.log('[API] Returning times:', result);
    return result;
};

const submitAPI = function(formData) {
    console.log('[API] submitAPI called with:', formData);
    
    // Validate required fields
    if (!formData.date || !formData.time) {
        console.error('[API] Missing date or time');
        return false;
    }
    
    if (typeof formData.guests !== 'number' || formData.guests < 1 || formData.guests > 10) {
        console.error('[API] Invalid guests');
        return false;
    }
    
    console.log('[API] Booking accepted');
    return true;
};

// Make available globally
window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;

console.log('%c[API] ✓ Seeded Random API Ready', 'color: green; font-weight: bold;');
console.log('fetchAPI:', typeof window.fetchAPI);
console.log('submitAPI:', typeof window.submitAPI);