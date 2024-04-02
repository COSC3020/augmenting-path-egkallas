function augmentingPath(graph, startNode, targetNode, visited = []) {
    visited.push(startNode);

    if (startNode === targetNode) {
        return [startNode];
    }

    var neighbors = graph[startNode];

    for (var neighbor in neighbors) {
        if (!visited.includes(neighbor)) {
            var path = augmentingPath(graph, neighbor, targetNode, visited.slice());
            if (path.length > 0) {
                return [startNode].concat(path);
            }
        }
    }

    return [];
}
