const minheap = require("./minBinaryHeap")



class Graph{

    constructor(){
        this.adjacencyList = {}
    }


addVertex(vertex){
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = []
    }
}



addEdge(start, end,weight){
        this.adjacencyList[start].push({node: end, weight})
        this.adjacencyList[end].push({node: start, weight})
    }


shortestPath(start, end){

    let heap = new minheap.PriorityQueue()
    let shortestDistance = {}
    let previous = {}
    let path = []
    
    // set up
    for(let city in this.adjacencyList){
        if(city === start){
            heap.enqueue(city,0)
            shortestDistance[city] = 0
        }else{
        heap.enqueue(city, Infinity)
        shortestDistance[city] = Infinity
        }
        previous[city] = null
    }

    // infine loop
        while(heap.values){

            let currentShortest = heap.dequeue()

            if(currentShortest.value === end){
                let routeHelp = end


            while(previous[routeHelp]){
                path.push(routeHelp)
                routeHelp = previous[routeHelp]

            }
            
            break
                // 
            }
        
            let nextNode;
            let candiate;

            // checking the validity of the dequed node, it needs to have a value 
            // or shortest distance does not need to be Infinity 

            if(currentShortest || shortestDistance[currentShortest.value] != Infinity){
                
                for(let i =0; i< this.adjacencyList[currentShortest.value].length; i++){

                    nextNode = this.adjacencyList[currentShortest.value][i]
                    candiate = shortestDistance[currentShortest.value] + nextNode.weight
                    
                    if(candiate < shortestDistance[nextNode.node]){
                        shortestDistance[nextNode.node] = candiate;
                        previous[nextNode.node] = currentShortest.value
                        heap.enqueue(nextNode.node, candiate)
                    }
                }
            }
        }
            path.push(start)
            path.reverse()
        debugger
    }
}



let g = new Graph()

g.addVertex("BOS")
g.addVertex("LAX")
g.addVertex("LHR")
g.addVertex("NYC")
g.addVertex("CDG")

// debugger

g.addEdge("LAX", "BOS", 7)
g.addEdge("LAX", "NYC", 9)
g.addEdge("LAX", "LHR", 13)
g.addEdge("BOS", "NYC", 1)
g.addEdge("BOS", "CDG", 9)
g.addEdge("NYC", "LHR", 6)
g.addEdge("NYC", "CDG", 7)
g.addEdge("LHR", "CDG", 4)

let route = g.shortestPath("BOS", "CDG")


let test = {
    itemName: "IPHONE",
    RRP: 999,
    weightGrams: 180
}

let test = {
    deviceName: "iPhone XR",
    USD_Price: 999,
    weightGrams: 160
}
