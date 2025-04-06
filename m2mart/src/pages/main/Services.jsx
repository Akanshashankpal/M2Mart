import { Box, Heading, Text, VStack, Container, Icon } from "@chakra-ui/react";
import { FaTruck, FaShieldAlt, FaTags, FaHeadset } from "react-icons/fa";
import Navbar from "../Dashboard/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md" py={10}>
        <VStack spacing={6} align="center">
          <Heading as="h1" size="xl" textAlign="center" color="teal.300">
            Our Services - M2Mart
          </Heading>
          <Text fontSize="lg" textAlign="center">
            At <strong style={{color:"red"}}>M2Mart</strong>, we go beyond just selling products – we ensure a complete shopping
            experience with our top-notch services designed to provide convenience, security, and affordability.
          </Text>
          
          <Box textAlign="center" p={5} borderWidth={1} borderRadius="lg" boxShadow="md" w="full">
            <Icon as={FaTruck} boxSize={10} color="blue.500" />
            <Heading as="h3" size="md" mt={3}>Fast & Reliable Delivery</Heading>
            <Text fontSize="md">We ensure quick and hassle-free delivery so that your orders reach you on time.</Text>
          </Box>
          
          <Box textAlign="center" p={5} borderWidth={1} borderRadius="lg" boxShadow="md" w="full">
            <Icon as={FaShieldAlt} boxSize={10} color="green.500" />
            <Heading as="h3" size="md" mt={3}>Secure Payment</Heading>
            <Text fontSize="md">Shop with confidence using our encrypted and secure payment options.</Text>
          </Box>
          
          <Box textAlign="center" p={5} borderWidth={1} borderRadius="lg" boxShadow="md" w="full">
            <Icon as={FaTags} boxSize={10} color="red.500" />
            <Heading as="h3" size="md" mt={3}>Exclusive Deals & Discounts</Heading>
            <Text fontSize="md">Enjoy the best deals, seasonal discounts, and special offers on top products.</Text>
          </Box>
          
          <Box textAlign="center" p={5} borderWidth={1} borderRadius="lg" boxShadow="md" w="full">
            <Icon as={FaHeadset} boxSize={10} color="purple.500" />
            <Heading as="h3" size="md" mt={3}>24/7 Customer Support</Heading>
            <Text fontSize="md">Our dedicated support team is available round-the-clock to assist you.</Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Services;