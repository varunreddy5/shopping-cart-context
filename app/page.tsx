import { Box, Container, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaTshirt } from 'react-icons/fa';
import ShoppingItem from './items/shopping-item';

const items = [
  {
    id: '1',
    name: 'Winter Jacket',
    price: '$40',
  },
  {
    id: '2',
    name: 'Cozy Scarf',
    price: '$15',
  },

  {
    id: '3',
    name: 'Warm Gloves',
    price: '$20',
  },

  {
    id: '4',
    name: 'Snow Boots',
    price: '$60',
  },

  {
    id: '5',
    name: 'Knit Hat',
    price: '$10',
  },

  {
    id: '6',
    name: 'Fleece Blanket',
    price: '$30',
  },

  {
    id: '7',
    name: 'Thermal Socks',
    price: '$8',
  },

  {
    id: '8',
    name: 'Winter Parka',
    price: '$80',
  },

  {
    id: '9',
    name: 'Hot Cocoa Mix',
    price: '$5',
  },
];

export default function Home() {
  return (
    <Container size="5xl">
      <SimpleGrid columns={3} spacing={20}>
        {items.map((item: any) => (
          <ShoppingItem item={item} key={item.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
