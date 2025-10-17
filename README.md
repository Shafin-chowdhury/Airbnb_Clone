
🏠 Airbnb-Inspired Frontend Task

A responsive Airbnb-inspired homepage built using React and Tailwind CSS.
This project replicates the modern layout, animations, and responsiveness of Airbnb’s home page — including a dynamic header, inspirational section, category listings, and footer — while being optimized for both desktop and mobile devices.

🚀 Features
🖥️ Desktop View

Fully responsive modern Airbnb-style design

Shrinking header animation when scrolling

Image cards with heart icons and “Guest favorite” badge

Category rows with listings data

Beautiful inspirational section with travel ideas

Functional and aesthetic footer

📱 Mobile View

Compact header with a search bar only (includes a search icon and “Start your search” text)

Below the search bar, simplified navigation tabs for:

Homes

Experiences

Services

On scroll, category images hide, leaving only tab text visible

Clean responsive design adapting to all screen sizes

🧩 Components Overview
Component	Description
Header.jsx	Contains the main site navigation, responsive search layout, and shrink-on-scroll functionality
Card.jsx	Displays property details (image, name, price, rating) with favorite heart icon
CategoryRow.jsx	Displays a horizontal scrollable row of Card components under each section
Inspirational.jsx	Section displaying travel ideas and destinations (as seen on Airbnb)
Footer.jsx	Responsive footer section with company details and social links
data/Listing.js	Data file storing listings for each section
App.jsx	Main layout combining all sections into one complete page
🛠️ Tech Stack

⚛️ React.js – Component-based frontend UI

🎨 Tailwind CSS – Utility-first responsive styling

💡 React Icons – For consistent and modern iconography
