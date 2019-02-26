module.exports = function getLoveTrianglesCount(preferences = []) {
    let int = 0;
    let preLenght = preferences.length;
    for (let i = 0; i < preLenght; i++){
        let x = preferences[i];
        let y = preferences[x - 1];
        let z = preferences[y - 1];
        if ((x != i + 1) && (y != x) && (z != y) && (z == i + 1)){
            int += 1;
            preferences[i] = undefined;
        }
    }
    return int;
}