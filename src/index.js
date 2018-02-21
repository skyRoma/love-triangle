/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var count=0;
preferences.unshift("begin");
for (var i =1; i < preferences.length; i++) {
if(preferences[preferences[preferences[i]]]==i && preferences[i]!=i) count++;
}
return count=count/3;
};