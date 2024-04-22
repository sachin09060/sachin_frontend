import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>action</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;