import {  Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return  (
    
      <VStack 
      align='stretch' 
      backgroundColor='white'
      borderRadius="10px"
      spacing='10px'
      >
      <Image borderRadius="10px" src={imageSrc}  />
        <Heading paddingLeft='10px' size="md" textColor='black'>{title}</Heading>
        <Text paddingLeft='10px' textColor='grey'>{description}</Text>
      <HStack paddingBottom='10px'>
        <Text paddingLeft='10px' textColor='black'>See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" color='black'/></HStack>
      </VStack>
    
  );
};

export default Card;
