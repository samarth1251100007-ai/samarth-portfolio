// SAMARTH.EXE - PORTFOLIO JAVASCRIPT

// PAGE LOADER

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("hide");

    }, 900);

});


// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navItems.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + entry.target.id) {

                    link.classList.add("active");

                }

            });

        }

    });

}, {
    threshold: 0.3
});

sections.forEach(section => observer.observe(section));


// INTERACTIVE TERMINAL

const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const terminalBody = document.getElementById("terminalBody");


const commands = {

    help: `
AVAILABLE COMMANDS

about     - Discover who I am.
skills    - Explore my technical interests.
projects  - Discover my projects.
education - Explore my education.
github    - Find my GitHub profile.
secret    - Unlock a personal message.
clear     - Clear the terminal.
matrix    - Activate a special visual effect.
`,

    about: `
IDENTITY: SAMARTH PATIL

Second-year ENTC student.
Studying at VIT Pune, India.

Curious about technology, programming
and building creative solutions.

CURRENT MISSION: Keep learning. Keep building.
`,

    skills: `
TECHNICAL INTERESTS

C++              Programming
Data Structures  Learning
HTML             Web Structure
CSS              Web Design
JavaScript       Interactivity
Git & GitHub     Version Control
AWS              Cloud Computing - Exploring
`,

    projects: `
PROJECT ARCHIVE

01. DIGITAL DETECTIVE
    Mystery-solving C++ project.

02. CIVICCONNECT
    Smart-city citizen portal concept.

STATUS: Learning projects.
`,

    education: `
EDUCATION DATABASE

NAME: Samarth Patil
INSTITUTE: VIT Pune
BRANCH: Electronics & Telecommunication
YEAR: Second Year
COUNTRY: India
`,

    github: `
GITHUB PROFILE

Username: samarth1251100007-ai

Opening GitHub profile...
`,

    secret: `
SECRET UNLOCKED!

"Great developers aren't born.
They are built through curiosity,
experimentation and consistency."

Keep exploring. You just found my little secret!

- Samarth
`,

    matrix: `
SYSTEM MESSAGE:

Curiosity Mode Activated!

The best way to predict the future
is to build it.
`,

};


// TERMINAL COMMAND EXECUTION

terminalForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();

    if (!command) return;


    // Show entered command

    const enteredCommand = document.createElement("p");

    enteredCommand.className = "terminal-result";

    enteredCommand.textContent = "visitor@samarth:~$ " + command;

    terminalOutput.appendChild(enteredCommand);


    // Clear command

    if (command === "clear") {

        terminalOutput.innerHTML = "";

        terminalInput.value = "";

        return;

    }


    // Process command

    if (commands[command]) {

        const result = document.createElement("pre");

        result.className = "terminal-result";

        result.textContent = commands[command];

        terminalOutput.appendChild(result);

    }

    else {

        const result = document.createElement("p");

        result.className = "terminal-result";

        result.textContent =
            `Command not found: ${command}. Type 'help' to see available commands.`;

        terminalOutput.appendChild(result);

    }


    // GitHub redirect

    if (command === "github") {

        const githubLink = document.createElement("a");

        githubLink.href = "https://github.com/samarth1251100007-ai";

        githubLink.target = "_blank";

        githubLink.rel = "noopener noreferrer";

        githubLink.textContent = "Open GitHub Profile ↗";

        githubLink.style.color = "#63d8ff";

        githubLink.style.display = "block";

        githubLink.style.margin = "10px 0";

        terminalOutput.appendChild(githubLink);

    }


    // Special effect

    if (command === "matrix") {

        document.body.classList.toggle("matrix-mode");

    }


    terminalInput.value = "";

    terminalBody.scrollTop = terminalBody.scrollHeight;

});