import NewArr from "./card";

const Cards = () =>{
    NewArr.map(({id,user,surname}) =>{
        return (
            <div>
                <h1>salam {user} {surname}</h1>
            </div>
        )
    })
}
export default Cards