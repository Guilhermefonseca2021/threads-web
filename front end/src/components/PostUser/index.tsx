import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../Actions";

interface PostUserProps {
  username?: string;
  userId?: string;
  imgAvatarUrl?: string;
  postImg?: string;
  title?: string;
  likes?: number;
  replies?: string;
  shared?: number;
}

export default function PostUser({
  username,
  userId,
  imgAvatarUrl,
  title,
  postImg,
  likes,
  replies
}: PostUserProps) {
  return (
    <Link to={`${username}/${userId}`} className="card-link">
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Avatar
            size={"md"}
            name={username || "Guilherme Fonseca"}
            src={imgAvatarUrl}
          />
          <Box w="1px" h={"full"} bg={"gray.light"} my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/sage-adebayo"
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/prosper-baba"
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                {username || "Guilherme Fonseca"}
              </Text>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
                w={4}
                h={4}
                ml={1}
              />
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontStyle={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>{title || "This is my first post."}</Text>
          <Box
            borderRadius={6}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"gray.light"}
          >
            <Image
              src={
                postImg || "https://media.istockphoto.com/photos/black-cat-working-at-the-computer-as-a-developer-online-picture-id858935040?k=6&m=858935040&s=170667a&w=0&h=ZLwjnIBL5_L-yjFHQJoPaI6x9QV-IGLy4a0Mp3TqXLM="
              }
            />
          </Box>
          <Flex gap={3} my={1}>
            <Actions />
          </Flex>
          <Flex gap={2} alignItems={"center"} my={1}>
            <Text color={"gray.light"} fontSize={"sm"}>
              {`${replies} replies` || "123 replies"}
            </Text>
            <Box width={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"grau.light"} fontSize={"sm"}>
              {likes + " likes" || "456 likes"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
}
