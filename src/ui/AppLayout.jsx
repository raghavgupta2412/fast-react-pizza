import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <h1>Content</h1>
      </main>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
