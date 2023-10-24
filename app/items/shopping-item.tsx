'use client';
import { Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import { FaTshirt } from 'react-icons/fa';
import { BsBagCheck } from 'react-icons/bs';
import useCartContext from '../cart-context';

export default function ShoppingItem(props: any) {
  const { item } = props;
  const cartContext = useCartContext();
  return (
    <Flex direction={'column'}>
      <Box
        p={5}
        border={'1px'}
        borderColor={'gray.200'}
        textAlign={'center'}
        borderRadius={'12px'}
      >
        <Icon as={FaTshirt} width={20} height={20} color={'purple.300'}></Icon>
      </Box>
      <Box display={'flex'} flexDirection={'column'} fontSize={13}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          mt={2}
          alignItems={'center'}
        >
          {item.name}
          <Tooltip hasArrow label="Add to cart">
            <Box as="span">
              <Icon
                as={BsBagCheck}
                cursor={'pointer'}
                onClick={() =>
                  cartContext.addToCart({
                    name: item.name,
                    price: item.price,
                    id: item.id,
                  })
                }
              />
            </Box>
          </Tooltip>
        </Box>
        <Text mt={1}>{item.price}</Text>
      </Box>
    </Flex>
  );
}
