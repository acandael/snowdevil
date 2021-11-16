// Import the `Cart` client component.
import Cart from '../components/Cart.client';
// Import the `Layout` server component.
import Layout from '../components/Layout.server';

// Return the `Layout` component wrapped around the `Cart` component.
export default function CartPage() {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
}
