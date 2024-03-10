function formatDated(dateString) {
    // Parse the input date string to get a Date object
    const date = new Date(dateString);
    const currentDate = new Date(); // Current date

    // Check if the date is today
    if (isSameDay(date, currentDate)) {
        return "Today";
    }

    // Check if the date is yesterday
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    if (isSameDay(date, yesterday)) {
        return "Yesterday";
    }

    // Calculate the difference in days
    const dayDifference = Math.floor((currentDate - date) / (24 * 60 * 60 * 1000));

    // If it's within the last week, show the day difference with the appropriate suffix
    if (dayDifference <= 6) {
        return `${getDayWithSuffix(dayDifference)} days ago`;
    }

    // For dates older than a week, use the standard formatting
    const dayWithSuffix = getDayWithSuffix(date.getDate());
    const monthName = getMonthName(date.getMonth());
    const year = date.getFullYear();
    return `${dayWithSuffix} ${monthName} ${year}`;
}

function isSameDay(date1, date2) {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
}

function getDayWithSuffix(day) {
    if (day >= 11 && day <= 13) {
        return `${day}th`;
    }

    switch (day % 10) {
        case 1:
            return `${day}`;
        case 2:
            return `${day}`;
        case 3:
            return `${day}`;
        default:
            return `${day}`;
    }
}

function getMonthName(month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
}
