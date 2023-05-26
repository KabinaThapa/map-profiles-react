function arrayelements(obj){
    return <div key={obj}>
        <h3> Name:{obj.name}</h3>
        <h3>Age:{obj.age}</h3> 
        <h3>Hobbies</h3>
        <div class="list">
            <ul>
                {obj.hobbies.map(hobbies=> (
            <li key={hobbies}> <h3>{hobbies}</h3></li>))}
            </ul>
           </div>
            
        <h3> Bio: {obj.bio}</h3>
        </div>
}
export default arrayelements