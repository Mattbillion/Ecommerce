import Table from "react-bootstrap/Table";

function Products(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Зураг</th>
          <th>Барааны нэр</th>
          <th>Үнэ</th>
          <th>Үлдэгдэл</th>
          <th>Хямдрал</th>
          <th>Категори</th>
          <th>
            <div className="d-flex justify-content-center">
    
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.image}</td>
          <td>{props.name}</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Products;
