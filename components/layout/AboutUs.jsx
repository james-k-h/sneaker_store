import { Box, VStack, Heading, Text, List, ListItem } from "@chakra-ui/react";

import _about_us from "../../public/assets/about_us.jpg";
import Image from "next/image";

const AboutUsInfo = () => {
  return (
    <body  className="w-full h-screen h-max">
      <Box className="h-full w-full flex justify-center mt-16 mb-[20rem] ">
        <VStack >
          <Box className="px-20 bg-emerald-400 w-10/12 rounded-xl">
          <Heading
            as="h1"
            className="py-4 justify-center flex text-left font-bold text-white text-2xl underline"
          >
            About Sneaker Store
          </Heading>
          <Image
                className="h-[300px] object-cover rounded-xl w-7/12 p-4 float-left"
                src={_about_us}
                alt="placeholder"
              />
            <Text whiteSpace="break-spaces" className="italic text-white p-4">
            Sneaker Store is Canada’s destination for high performance running Shoes. Our role is to help motivate Canadians to get moving and help them achieve their training goals.
            <br/><br/>
             As runners, Sneaker Store understands better than anyone the role this activity plays in our lives. We want to inspire our customers to achieve their goals by providing them with the highest quality shoes on the market,
             at the lowest prices.  
            </Text>
          </Box>
          <br/><br/><br/>
          <Box className="px-20 bg-emerald-400 w-10/12 rounded-xl ">
            <Heading as="h3" className='text-white font-bold text-xl text-center'>Shipping and Delivery</Heading>
            <Text whiteSpace="break-spaces" className="italic text-white p-2 text-center">
    <br/>
            <b>PLEASE NOTE: MOST ORDERS TYPICALLY ARRIVE WITHIN 5 BUSINESS DAYS </b>
            <br/><br/>
            <List >
              <ListItem>Free shipping offer applies to orders of $99 or more*. Some exceptions apply. </ListItem>
              <ListItem>Free shipping credit will be shown on order summary if applied.</ListItem>
              <ListItem>A maximum credit towards shipping cost of $40 will be applied during checkout.</ListItem>
              <ListItem>Customer will be charged the balance of shipping costs above $40.</ListItem>
            </List>
            </Text>
          </Box>
<br/><br/><br/><br/>
          <Box className="px-20 bg-emerald-400 w-10/12 rounded-xl p-4">
            <Heading as="h3" className='text-white font-bold text-xl text-center'>Contact Us</Heading>
            <Text whiteSpace="break-spaces" className="italic text-white p-2 text-center">
            For more information, you can contact us via email or regular post mail.
            <br/><br/>
            <b>Email: </b> Sneaker.Store@Sneakers.com
            <br/><br/>
            <b>Mail: </b> Sneaker.Store@Sneakers.com
            </Text>
          </Box>
        </VStack>
      </Box>
    </body>
  );
};
export default AboutUsInfo;
