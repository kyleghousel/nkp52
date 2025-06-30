# App concept: Nihar Patel Fanpage

## Stories

### Feature 1 - Build out Home page and navigation

User story: As a user, I want to easily navigate the Nihar fanpage by having a clear home/landing page and navigation.
Details: Setup react-router, Header and Navigation component with Links, Home page with spinning Nihar head (important).

### Feature 2 - Fetch all sounds from JSON-server and display them on the page

User story: As a user, I want to see all the available Nihar soundboard clips so I can relive iconic moments.
Details: Use `useEffect` to fetch sound objects from the JSON-server. Display each sound's name and a button (or image) to interact with it. Store in state and map through it on render.

### Feature 3 - Play sounds onClick

User story: As a user, I want to click a sound and hear it play instantly.
Details: Add audio playback logic via `<audio>` elements or `new Audio().play()`. OnClick of a sound button/image, trigger the appropriate audio clip using its source URL.

### Feature 4 - Car Page

User story: As a user, I want to see a dedicated page celebrating Nihar's car so I can be filled with automotive envy.
Details: Create a new route `/car` and design a page with a photo of Nihar's car, fun facts, and styling. Use props or state to render any data if needed. JSON server will have to be setup to accomodate comments as well as the soundboard.

### Feature 5 - Add Comments

User story: As a user, I want to leave a comment on the fanpage so I can share my admiration for Nihar.
Details: Create a controlled form for new comments. POST to JSON-server and update the comment display after successful submission.

### Feature 6 - Edit + Delete Comments

User story: As a user, I want to be able to edit or delete my comments so I can fix typos or remove regretful comments.
Details: Render each comment with Edit and Delete buttons. Clicking Edit lets you change the text inline. PATCH the updated comment. Clicking Delete removes it from state and sends a DELETE request.

### Feature 7 - Add Sorting/Filter Options to Soundboard

User story: As a user, I want to sort or filter sound clips by mood or keyword to find the right Nihar reaction.
Details: Add dropdown or checkbox UI to sort alphabetically or filter by tag/category. Update displayed list based on user selection.

---

## Stretch Stories

### Fetch data about Nihar's car from a Car API

User story: As a user, I want to learn detailed specs about Nihar’s car via real-time API data.
Details: Use a public car-related API (or a mock response if needed). Fetch based on make/model. Display HP, trim, etc.

### Make Car Page interactive with Nihar's car data

User story: As a user, I want to interact with Nihar’s car info in a fun way (like toggling fun facts).
Details: Add buttons to toggle specs, a quiz, or even an animated "rev engine" interaction with sound and CSS.
