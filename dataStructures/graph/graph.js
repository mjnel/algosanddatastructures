class Graph {
    constructor(){
        this.adjacencyList = {}
        this.test = "Mark"
    }

    // adding Node
addVertex(vertex){
        if(!this.adjacencyList[vertex]){
                this.adjacencyList[vertex] = [] 
        }
    }


addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }


removeEdge(vertex1, vertex2){

    let vertexTwoIndex = this.adjacencyList[vertex1].indexOf(vertex2)
    this.adjacencyList[vertex1].splice(vertexTwoIndex,1)

    let vertexOneIndex = this.adjacencyList[vertex2].indexOf(vertex1)
    this.adjacencyList[vertex2].splice(vertexOneIndex,1)
    // debugger;
}




removeVertex(vertex){
    let pathArr = this.adjacencyList[vertex]

    console.log(pathArr)

    for(let i =0; i < pathArr.length; i++){
        this.removeEdge(vertex, pathArr[i])
    }

    // going to have one connection left over so manually removing that 
    this.removeEdge(pathArr[0],vertex)
    // deleting the key from the object
    delete this.adjacencyList[vertex]

    debugger

}



DepthFirstSearchRecursive(node){
    let list = []
    let visitedNodes ={}
    const adjacencyList = this.adjacencyList

    function DFS (incomingNode){

        list.push(incomingNode)
        visitedNodes[incomingNode] = true

        for(let i = 0; i < adjacencyList[incomingNode].length; i++){
            debugger
            if(!visitedNodes[adjacencyList[incomingNode][i]]){
                debugger
                DFS(adjacencyList[incomingNode][i])
            }
        }
    }


    DFS(node)

    return list

}

// going down and then across
DepthFirstSearchIterative(node){
    let stack = [node]
    let resList = []
    let vistedNodes = {}

    vistedNodes[node] = true

    while(stack.length){

        let vertex = stack.pop();
        resList.push(vertex)

        // debugger
        // adding in stuff twice
        this.adjacencyList[vertex].forEach((e)=>{
            if(!vistedNodes[e]){
                vistedNodes[e] = true
                stack.push(e)
                // debugger
            }
        })

        // debugger

    }
    debugger
}



// visiting the nodes at the side of the vertex and then down
BreadthFirstSearchIterative(node){
    let queue  = [node]
    let resList = []
    let vistedNodes = {}

    vistedNodes[node] = true

    while(queue.length){

        let vertex = queue.shift();
        resList.push(vertex)

        // debugger
        // adding in stuff twice
        this.adjacencyList[vertex].forEach((e)=>{
            if(!vistedNodes[e]){
                vistedNodes[e] = true
                queue.push(e)
                // debugger
            }
        })

        // debugger

    }
    debugger
}







}







let g = new Graph()
// g.addVertex("Boston")
// g.addVertex("Miami")
// g.addVertex("Main")
// g.addVertex("New York")


// g.addEdge("Boston","Main")
// g.addEdge("Boston","New York")
// g.addEdge("Boston","Miami")
// g.addEdge("Main","New York")
// g.addEdge("Main","Miami")


// // g.removeEdge("Boston","Main")

// g.removeVertex("Main")





g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


// g.DepthFirstSearchIterative("A")
g.BreadthFirstSearchIterative("A")


// debugger


