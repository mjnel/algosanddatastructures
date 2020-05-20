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



let graph = new Graph()

// g.addVertex("BOS")
// g.addVertex("LAX")
// g.addVertex("LHR")
// g.addVertex("NYC")
// g.addVertex("CDG")

// // debugger

// g.addEdge("LAX", "BOS", 7)
// g.addEdge("LAX", "NYC", 9)
// g.addEdge("LAX", "LHR", 13)
// g.addEdge("BOS", "NYC", 1)
// g.addEdge("BOS", "CDG", 9)
// g.addEdge("NYC", "LHR", 6)
// g.addEdge("NYC", "CDG", 7)
// g.addEdge("LHR", "CDG", 4)

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

let route = graph.shortestPath("A", "E")
