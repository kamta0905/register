import React from "react";
import { Navbar } from "../../layout";
import { Container } from "react-bootstrap";

import { faker } from "@faker-js/faker";
import { FeedCard } from "../../components";

const data = Array(100)
  .fill()
  .map((_, index) => {
    return {
      id: index,
      title: faker.name.jobTitle(),
      link: faker.internet.url(),
      tags: [faker.random.words],
      image: faker.image.imageUrl(),
    };
  });

function Home() {
  return (
    <div>
      <Navbar />
      <Container fluid className="mt-4 p-5">
        {data.map((item, index) => {
          return <FeedCard key={index.toString()} item={item} />;
        })}
      </Container>
    </div>
  );
}

export default Home;
