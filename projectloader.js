let projects = fetch('./projects/projects.json').json()
let MC = []
let ST = []
let GM = []

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
