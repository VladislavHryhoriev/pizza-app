import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* filters */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "Пицца 1",
                    image:
                      "https://prontopizza.ua/vinnytsia/wp-content/uploads/sites/21/2021/07/4-syry-300x300.webp",
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
