# VyomGarud Landing Page: Internship Assessment

### Submission for Web Developer Intern Role

Thanks for taking the time to look at this project. I built this responsive landing page for the fictional UAV company, VyomGarud. My primary focus was hitting the core requirements while conveying a precise, high-end, military-grade feeling.

## Design and Aesthetic Notes

The look is built around **high contrast** and a **minimalist, dark theme**, which I felt best communicates reliability and advanced technology.

* **Color Palette:** I stuck strictly to the requested charcoal, white, and the accent orange (`#ff7b00`).
* **Typography:** Used the geometric **Montserrat** for all headings and the clean **Inter** or **Poppins** for body text.
* **Aesthetic Goal:** To make the site feel dynamic and not just static text, I ensured the navigation links transform into solid orange buttons on hover—this gives the whole header a consistent, interactive feel. I also added subtle lift and shadow to the product cards in the **Capabilities** section.

## Implementation Details

* **Stack:** React (using Vite) and Tailwind CSS.
* **Structure:** The page is broken down into the five required sections: Hero, About, Capabilities (3 cards), Highlights (3 bullets), and the Contact/Footer.
* **Anchor Links:** I had to implement a small CSS fix using `scroll-padding-top` on the main container to prevent the fixed Navbar from covering the top of each section when a user clicks a navigation link.

## How to Run the Project

The setup is standard for a modern React project.

1.  **Clone the repo:**
    ```bash
    git clone [YOUR_REPO_LINK]
    cd vyomgarud-landing
    ```
2.  **Install everything:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    npm run dev
    ```
    The site will be running locally at `http://localhost:5173`.

##  Commit History Strategy

I've kept the Git history progressive, documenting key steps as I moved from structure to styling:

* `feat: Initial setup (React, Vite, Tailwind config).`
* `feat: Complete Hero, About, and Footer components.`
* `feat: Implement Capabilities and Highlights sections with initial content.`
* `feat: Add functional, fixed Navbar.`
* `fix: Resolve all CSS alignment issues (anchor links and button sizing).`
* `style: Final polish on hover effects and button styles.`
* `docs: Finalize README.`

I appreciate the chance to work on this assignment.