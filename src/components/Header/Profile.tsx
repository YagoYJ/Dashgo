import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Yago Juan</Text>
        <Text color="gray.300" fontSize="small">
          yagojuan@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Yago Juan" src="https://github.com/yagoyj.png" />
    </Flex>
  );
}
