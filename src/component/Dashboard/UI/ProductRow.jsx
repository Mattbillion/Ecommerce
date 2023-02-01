export default function ProductRow ({itemData}) {
  console.log(itemData);
  console.log("console data", itemData.name)
  return (
    <tr>
      <td style={{ width: "100px" }}>
        <img style={{ width: "100%" }} src={itemData.image} alt="id" />
      </td>
      <td>{itemData.name}</td>
      <td>{itemData.price}</td>
      <td>{itemData.sale}</td>
      <td>{itemData.category}</td>
      <td>
        <div className="d-flex justify-content-center">
  
        </div>  
      </td>
    </tr>
  )
}