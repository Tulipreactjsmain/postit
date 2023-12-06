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
      backgroundColor={`#ECEAEB`}
    >
      <Box py={`8.34vh`} maxW={{ base: "100%", md: "100%", lg: "1199px" }}>
        <Flex
          minH="145px"
          w={"100%"}
          gap={`27px`}
          px={{ base: "10px", md: "10px", lg: `27px` }}
          py={`23px`}
          border={`solid 0.5px #BBBBBB`}
          rounded={`md`}
          justifyContent={{
            base: "space-between",
            md: "space-between",
            lg: "center",
          }}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          {highlightData.map((data, index) => (
            <Box key={index} display={`flex`} gap={`5`} maxW={`381px`}>
              <Box
                position={`relative`}
                w={`100%`}
                height={`100%`}
                maxW={`146px`}
              >
                <Box
                  height={`100%`}
                  bgImage={data.img}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize={"cover"}
                  rounded={`md`}
                ></Box>
              </Box>

              <Box display={`flex`} flexDirection={`column`} gap={`5`}>
                <Text
                  rounded={`md`}
                  backgroundColor={`#E5BF5E`}
                  maxW={`89px`}
                  color={`white`}
                  textAlign={`center`}
                  mt={`4`}
                >
                  Lifestyle
                </Text>
                <Text fontSize={"lg"}>
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
