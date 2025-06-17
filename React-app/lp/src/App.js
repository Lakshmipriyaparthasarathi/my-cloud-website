import Rough from'./one';

function Parent() {
    return (
        <div>
        <h1>Parent component</h1>
        <Child2 />
        <Child1 />
        </div>
    
    );
}
function Child1() {
    return (
        <h1>Child1</h1>
    );
}
function Child2() {
    return (
        <h1>Child2</h1>
    );
}
   

export default Parent;
