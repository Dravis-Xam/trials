### binary trees
* binary search trees 
- connect nodes. sum of left nodes > root node > right nodes

* spanning trees  

1. connected: each node is accessible from the other
2. unconnected: no cycle, connected through subgraph

* importance
- the cost of a spanning tree is the sum of the cost of the edges

1. minimise cost


### krustal's algorithm
1. select the shortest edge
2. select the next shortest edge that does not form a cycle
3. repeat 2 until all vertices are connected

* using krustal's
ED 2
AB 3
AE 4
CD 5
EF 5
CF 6
AF 7
BF 8
DF 8


### Prim's algorithm
1. select any vertex
2. select the shortest edge connected to the vertex
3. repeat 2 until all edges are connected

* give a summary on:
- avl trees
- 