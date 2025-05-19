CalcuHoras - Working Hours Calculator
Description
CalcuHoras is a web application that calculates working hours based on employee check-in and check-out times. It categorizes hours into Regular Hours (HO), Daytime Overtime (HED), and Nighttime Overtime (HEN), providing both detailed numerical results and visual representations through charts.
How to Use

Enter Time Information:

Set the check-in time (when the employee started work)
Set the check-out time (when the employee finished work)


Configure Hour Categories:

HO (Regular Hours): Default 8:00 AM - 5:59 PM
HED (Daytime Overtime): Default 6:00 PM - 8:59 PM
HEN (Nighttime Overtime): Default 9:00 PM - 5:59 AM


Click the Calculate Hours button to process the data

Examples
Standard Workday

Check-in: 8:00 AM
Check-out: 5:00 PM
Result: 9 hours of Regular Hours (HO)

Extended Workday

Check-in: 8:00 AM
Check-out: 7:30 PM
Result: 10 hours of Regular Hours (HO), 1.5 hours of Daytime Overtime (HED)

Night Shift

Check-in: 4:00 PM
Check-out: 11:00 PM
Result: 2 hours of Regular Hours (HO), 3 hours of Daytime Overtime (HED), 2 hours of Nighttime Overtime (HEN)

Hosting Options
To share this application online for free:

GitHub Pages:

Create a GitHub repository
Upload your project files
Enable GitHub Pages in repository settings
Available at: https://yourusername.github.io/repository-name/


Netlify:

Create a Netlify account
Drag and drop your project folder
Available at: https://your-site-name.netlify.app


Vercel:

Connect your GitHub repository
Vercel will automatically deploy your site
Available at: https://your-project.vercel.app



Troubleshooting

No results appear: Check your browser console (F12) for errors
Calculation errors: Verify that your time inputs are correctly formatted
API connection issues: Ensure you have internet connectivity

Technical Information
Built with:

HTML5, CSS3, JavaScript
Bootstrap 5 for UI components
Chart.js for data visualization
jQuery for DOM manipulation
REST API for calculations