const courses = [
    { id: 1, course: "JavaScript", information: "It Is Js Course." },
    { id: 2, course: "HTML", information: "It Is HTML course" },
    { id: 3, course: "CSS", information: "Use to style pages." },
    { id: 4, course: "React", information: "React fundamentals." },
    { id: 5, course: "Node.js", information: "it is Node.js cource." },
];
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const tableBody = document.querySelector("#results-table tbody");
function renderTable(results) {
    tableBody.innerHTML = "";
    if (results.length === 0) {
        const noResultRow = `<tr><td colspan="3">No results found</td></tr>`;
        tableBody.innerHTML = noResultRow;
        return;
    }
    results.forEach((result) => {
        const row = `
            <tr>
                <td>${result.id}</td>
                <td>${result.course}</td>
                <td>${result.information}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();

    const filteredCourses = courses.filter(
        (course) =>
            course.course.includes(query) && course.information.includes(query)
    );

    renderTable(filteredCourses);
});
