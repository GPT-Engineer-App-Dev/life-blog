import { Box, VStack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { FaPenFancy } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl">Welcome to My Personal Blog</Heading>
        <Text mt={4}>Discover the stories and adventures of my life.</Text>
      </Box>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="/images/profile.jpg"
        alt="Profile Image"
      />
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl">Latest Posts</Heading>
        <Text mt={4}>Stay updated with my latest experiences and insights.</Text>
      </Box>
      <Button rightIcon={<FaPenFancy />} colorScheme="blue">
        Write a New Story
      </Button>
    </VStack>
  );
};

export default Index;