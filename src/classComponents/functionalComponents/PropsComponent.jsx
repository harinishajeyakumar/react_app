
function PropsComponent(props){

     const styleAttrs={
        backgroundcolor: "red",
        color:"black"
     }
    return (
        <div style ={styleAttrs}>
           <h1> Hello,{props.name}<br></br> This is {props.course} class</h1>
        </div>
    )
}
export default PropsComponent;