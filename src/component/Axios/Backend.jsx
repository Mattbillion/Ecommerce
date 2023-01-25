import "../Axios/Backend.css";
export default function Backend({data}) {

  

  return (
    <>
      {data && data.map((item, index) => {
        return (
          <div key={index}>
            <h1>Name: {item.name}</h1>
            <h1>Name: {item.price}</h1>
            <img className="image" src={item.image}></img>
          </div>
        );
      })}
    </>
  )
}
