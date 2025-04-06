import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";
import Navbar from "../Dashboard/Navbar";

const AboutUs = () => {
  return (
    < >
      <Navbar />
      <Container maxW="container.md" py={10}  color="black" borderRadius="lg" boxShadow="xl" p={6}>
        <VStack spacing={6} align="center">
          <Heading as="h1" size="xl" textAlign="center" color="teal.300">
            About Us - M2Mart
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Welcome to <strong>M2Mart</strong>, your one-stop destination for high-quality
            products at unbeatable prices! At M2Mart, we believe in providing a seamless online
            shopping experience, offering a wide range of products across multiple categories.
          </Text>
          <Heading as="h2" size="lg" color="teal.300">Our Mission</Heading>
          <Text fontSize="md" textAlign="center">
            Our mission is to make online shopping convenient, affordable, and enjoyable for everyone.
            We strive to bring the best products to our customers with exciting discounts and exclusive offers.
          </Text>
          <Heading as="h2" size="lg" color="teal.300">Why Choose M2Mart?</Heading>
          <Text fontSize="md" textAlign="center">
            <strong>✔ Wide Product Selection:</strong> From the latest tech gadgets to trendy fashion items, we have it all.<br/>
            <strong>✔ Affordable Prices:</strong> Get the best deals with competitive pricing and seasonal discounts.<br/>
            <strong>✔ Secure Payments:</strong> Shop with confidence using our secure payment gateways.<br/>
            <strong>✔ Fast & Reliable Delivery:</strong> We ensure timely and hassle-free delivery to your doorstep.<br/>
            <strong>✔ Excellent Customer Support:</strong> Our dedicated support team is always here to assist you.
          </Text>
          <Heading as="h2" size="lg" color="teal.300">Our Commitment</Heading>
          <Text fontSize="md" textAlign="center">
            At M2Mart, we prioritize customer satisfaction above everything else. We work closely
            with trusted brands and suppliers to guarantee the quality and authenticity of every product we offer.
          </Text>
          <Text fontSize="lg" fontWeight="bold" textAlign="center" color="teal.300">
            Thank you for choosing M2Mart – where shopping meets convenience and affordability! Happy shopping!
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default AboutUs;