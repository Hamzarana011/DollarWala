import { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  }

  

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => removeFromCart(item)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {cartItems.length === 0 && (
        <p>Your cart is currently empty.</p>
      )}
    </Container>
  );
};

export default Cart;
