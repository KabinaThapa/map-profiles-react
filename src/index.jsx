
function arrayelements(obj) {
  return (
    <div class="Abox" key={obj}>
      <div class="pic">
        <img src={obj.image} alt="pic" width="150px" height="140px" />
      </div>
      <h4> Name:{obj.name}</h4>
      <h4>Age:{obj.age}</h4>
      <h4>Hobbies:</h4>
      <div class="list">
        <ul>
          {obj.hobbies.map((hobbies) => (
            <li key={hobbies}>
              {" "}
              <h4>{hobbies}</h4>
            </li>
          ))}
        </ul>
      </div>

      <h4> Bio: {obj.bio}</h4>
    </div>
  );
}
export default arrayelements;
