document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        // Populate events array with saved event data from your backend
        {
          title: 'Event 1',
          start: '2024-04-15'
        },
        {
          title: 'Event 2',
          start: '2024-04-20'
        }
        // Add more events as needed
      ]
    });

    calendar.render();
  });