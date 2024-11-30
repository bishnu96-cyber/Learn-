// Define the phases of the syllabus
const syllabus = [
    {
        phase: "Phase 1: Basics of Programming Language",
        topics: [
            "What is programming language and how it works. (1 Day)",
            "Data Types and Operators (1 Day)",
            "Bitwise and Math for DSA (2 Days)",
            "Expressions (1 Day)",
            "Statements (1 Day)",
            "Loops (3 Days)",
            "Questions (1 Day)",
            "Functions (2 Days)",
            "Doubt Discussion (1 Day)",
            "Recursion (2 Days)",
            "Time Complexity (1 Day)"
        ]
    },
    {
        phase: "Phase 2: Basics of Data Structures and Algorithm",
        topics: [
            "Arrays (4 Days)",
            "Hashing (1 Day)",
            "Questions (1 Day)",
            "Searching (3 Days)",
            "Sorting (3 Days)",
            "OOPs in JAVA (2 Days)",
            "Questions (1 Day)"
        ]
    },
    {
        phase: "Phase 3: DSA Full Course",
        topics: [
            "Linked List (3 Days)",
            "Algorithms in Linked List (2 Days)",
            "Stacks (3 Days)",
            "Questions (2 Days)",
            "Binary Search Tree (3 Days)",
            "Heaps (2 Days)",
            "Trie (2 Days)",
            "Questions (1 Day)"
        ]
    },
    {
        phase: "Phase 4: Advanced Topics",
        topics: [
            "Backtracking Algorithm (2 Days)",
            "Graph Theory (2 Days)",
            "Dynamic Programming (3 Days)",
            "Greedy Algorithms (3 Days)"
        ]
    }
];

// Function to update syllabus content
function updateSyllabusContent(tabIndex) {
    const syllabusContent = document.querySelectorAll("#syllabusContent");
    syllabusContent.forEach((content, index) => {
        content.innerHTML = ""; // Clear previous content
        if (index === tabIndex) {
            const phase = syllabus[index];
            const phaseHeading = document.createElement("h3");
            phaseHeading.innerText = phase.phase;
            content.appendChild(phaseHeading);

            const ul = document.createElement("ul");
            phase.topics.forEach(topic => {
                const li = document.createElement("li");
                li.innerText = topic;
                ul.appendChild(li);
            });
            content.appendChild(ul);
        }
    });
}

// Event listeners for button clicks
document.querySelectorAll(".nav-tabs button").forEach((button, index) => {
    button.addEventListener("click", () => {
        updateSyllabusContent(index);
    });
});

// Initialize the syllabus content for the first tab
updateSyllabusContent(0);
