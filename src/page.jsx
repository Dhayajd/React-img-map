
const Page = (props) => {
    return (
        <> 
        <div className="paged"></div>
        
        <div className="card" >
        <img  src={props.itemss} alt="loading..." ></img>
        <h1>{props.names}</h1>
        </div>
        </>
    )

}
export default Page