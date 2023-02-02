import { Table } from 'react-bootstrap';
import ProductRow from './ProductRow'


export default function Products ({data}) {
  console.log("From Products" ,data);
  return (
    <div className="products">
      <Table size="md" bgcolor="white" striped bordered hover>
        <thead>
          <tr>
            <th>Зураг</th>
            <th>Барааны нэр</th>
            <th>Үнэ</th>
            <th>Үлдэгдэл</th>
            <th>Категори</th>
            <th className="d-flex justify-content-center">
      
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((itemData, index) => (
            <ProductRow itemData={itemData} key={index} />
          ))}
        </tbody>
      </Table>
    </div>
  )
}