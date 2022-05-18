import Image from "next/image";
import Layout from "../components/Layout";
import { GridContainer } from "../components/GridContainer";
import { Card } from "../components/Card/Card";

export default function Home() {
  return (
    <Layout>
      <GridContainer className="p-2 md:p-4 lg:p-6">
        <Card>
          <Image
            src="https://via.placeholder.com/150"
            width={150}
            height={150}
            layout="intrinsic"
            objectFit="contain"
            alt="placeholder"
          />
          Ipsum illo commodi ullam odio mollitia Tempore dolorem nemo laudantium
          inventore odio Debitis voluptatibus sed ratione architecto magni
          Tempora voluptate
        </Card>
        <Card>this is a card</Card>
        <Card>this is a card</Card>
      </GridContainer>
    </Layout>
  );
}
