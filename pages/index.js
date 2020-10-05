import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { SEOLayout } from "../components/SEOLayout";
import { Item } from "../components/Item";
import { List } from "../components/List";
import { getProducts } from "../services/products";

const Index = ({ products }) => {
  const router = useRouter();
  const [itemSelected, setItemSelected] = useState(null);

  useEffect(() => {
    console.log(router.query);
    if (itemSelected) {
    }
  }, [itemSelected]);

  return (
    <SEOLayout>
      <main>
        <section>
          {itemSelected === null && (
            <List
              products={products}
              item={itemSelected}
              setItemSelected={setItemSelected}
            />
          )}
          {itemSelected && (
            <Item item={itemSelected} setItemSelected={setItemSelected} />
          )}
        </section>
      </main>
    </SEOLayout>
  );
};

Index.getInitialProps = async (ctx) => {
  const products = await getProducts();
  return { products };
};

export default Index;
