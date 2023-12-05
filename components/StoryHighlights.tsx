import { Box, Text, Flex } from "@chakra-ui/react";
export default function StoryHighlights() {
  const highlightData = [
    { img: "/LifestyleImg.svg" },
    { img: "/NatureImg.svg" },
    { img: "/TechnologyImg.svg" },
  ];
  return (
    <Box
      maxW="100%"
      display={`flex`}
      alignItems={`center`}
      justifyContent={`center`}
    >
      <Box py={`8.34vh`} w={`83.28vw`}>
        <Flex
          minH="145px"
          w={"100%"}
          gap={`27px`}
          px={`27px`}
          border={`solid 0.5px #BBBBBB`}
          rounded={`md`}
          justifyContent={`center`}
          // flexWrap={`wrap`}
        >
          {highlightData.map((data, index) => (
            <Box
              key={index}
              display={`flex`}
              alignItems={`center`}
              gap={`5`}
              w={`381px`}
              
            >
              <Box
                minW={`146px`}
                height={`96px`}
                bgImage={data.img}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize={"cover"}
                rounded={`md`}
              ></Box>
              <Box display={`flex`} flexDirection={`column`} gap={`5`}>
                <Text
                  rounded={`md`}
                  backgroundColor={`#E5BF5E`}
                  w={`89px`}
                  color={`white`}
                  textAlign={`center`}
                  mt={`4`}
                >
                  Lifestyle
                </Text>
                <Text fontSize={"md"}>
                  The 20 Biggest Fashion Companies In Nigeria 2022
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
