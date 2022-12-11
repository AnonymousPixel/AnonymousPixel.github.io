fetch('https://anonymouspixel.github.io/Projects/projects.json')
    .then((response) => response.json())
    .then((json) => orderProjects(json));
let MC = []
let ST = []
let GM = []

function orderProjects(projects){
    for (project in projects){
        switch (project["category"]){
            case "MC":
                MC.push(project)
            case "ST":
                ST.push(project)
            case "GM":
                GM.push(project)
            default:
                console.log(project)
        }
    }
}
