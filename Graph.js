class Graph{
    constructor() {
        this.adjacencyList={}
    }

    AddVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    AddEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    RemoveEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
        .filter(v => v !== vertex2)

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
        .filter(v => v !== vertex1)
    }

    RemoveVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex =this.adjacencyList[vertex].pop();
            this.RemoveEdge(vertex , adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    //dfs = depth first traversel 
    DepthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        (function dfs(vertex){
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(Neighbor => {
               if (!visited[Neighbor]) {
                    return dfs(Neighbor)
               }
            });
        })(start)
        return result;
    }

    DepthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited ={};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(Neighbor =>{
                if (!visited[Neighbor]) {
                    visited[Neighbor] = true;
                    stack.push(Neighbor);
                }
            })
        }
        return result;
    }

    BreadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }


}



let g = new Graph();
g.AddVertex("A")
g.AddVertex("B")
g.AddVertex("C")
g.AddVertex("D")
g.AddVertex("E")
g.AddVertex("F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E    
//        \   /   
//          F

g.AddEdge("A", "B")
g.AddEdge("A", "C")
g.AddEdge("B","D")
g.AddEdge("C","E")
g.AddEdge("D","E")
g.AddEdge("D","F")
g.AddEdge("E","F")



