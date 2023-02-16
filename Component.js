const {MyMath} = require("./MyMath");
class Component{
    render(){
        console.log('component render')
    }
}
const mult = MyMath.mul(4, 8);
console.log("mul = ", mult);
console.log(__filename)
console.log(__dirname)
exports.Component = Component;