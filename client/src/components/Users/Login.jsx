import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Sign in to your account</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						to enjoy all of our cool features ✌️
					</Text>
				</Stack>
				<form action="/api/v1/login" method="post">
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}>
						<Stack spacing={4}>
							<FormControl id="email" isRequired>
								<FormLabel>Email address</FormLabel>
								<Input type="email" name="email" autoComplete="off" />
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<Input type="password" name="password" />
							</FormControl>
							<Stack spacing={10}>
								<Stack
									direction={{ base: "column", sm: "row" }}
									align={"start"}
									justify={"space-between"}>
									<Checkbox>Remember me</Checkbox>
									<Link color={"blue.400"}>Forgot password?</Link>
								</Stack>
								<Button
									type="submit"
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}>
									Sign in
								</Button>
							</Stack>
						</Stack>
					</Box>
				</form>
			</Stack>
		</Flex>
	);
}
