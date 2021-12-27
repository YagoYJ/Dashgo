import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yago Juan</Text>
          <Text color="gray.300" fontSize="small">
            yagojuan@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Yago Juan" src="https://github.com/yagoyj.png" />
    </Flex>
  );
}
