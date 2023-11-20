import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home />
      <h1>hello</h1>
      <h2>hello</h2>
    </Layout>
  );
}
