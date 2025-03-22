// Simulate some mock data
const mockData = {
    totalUsers: 120,
    upcomingPickups: 45,
    pendingRequests: 10,
    completedPickups: 100
};

// Function to view users (simulated)
function viewUsers() {
    alert("Viewing users...");
    // In a real-world scenario, this would redirect to a user management page or open a modal with the user list.
}

// Function to view schedules (simulated)
function viewSchedules() {
    alert("Viewing schedules...");
    // In a real-world scenario, this would redirect to a schedule management page or open a modal with the schedule list.
}

// Function to generate reports (simulated)
function generateReports() {
    alert("Generating reports...");
    // In a real-world scenario, this could generate a downloadable report or show a report preview.
}

// Function to send notifications (simulated)
function sendNotifications() {
    alert("Sending notifications...");
    // This would trigger sending notifications to users, e.g., email or app push notifications.
}

// Function to edit schedules (simulated)
function editSchedules() {
    alert("Editing schedules...");
    // In a real-world scenario, this would redirect to a page to modify existing schedules.
}

// Function to view analytics (simulated)
function viewAnalytics() {
    alert("Viewing analytics...");
    // This could open a page or dashboard with more detailed analytics, charts, and graphs.
}

// Function to update the dashboard stats
function updateDashboard() {
    document.getElementById('total-users').textContent = mockData.totalUsers;
    document.getElementById('upcoming-pickups').textContent = mockData.upcomingPickups;
    document.getElementById('pending-requests').textContent = mockData.pendingRequests;
    document.getElementById('completed-pickups').textContent = mockData.completedPickups;
}

// Initialize the dashboard with mock data
updateDashboard();
