
const Greet = ({ name }) => {
    return <h1>Welcome, {name}!</h1>;
};
const Appone = () => {
    return(
        <div> 
    <Greet name="Laksh" />;
    <Greet name="vishh" />;
    <Greet name="sumi" />;
    </div>
    );
}
export default Appone;