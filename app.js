const projects = document.querySelector("#projects-div")

//View site styling for projects
projects.addEventListener("mouseover", (e) => {

    if (e.target.tagName.toLowerCase() === "img") {
        e.target.nextElementSibling.classList.add("show")
        const show = document.querySelector(".show")
        show.addEventListener("mouseout", (e) => {
            if (e.target.classList.contains("show")) {
                e.target.classList.remove("show")
            }
        })
    }
})