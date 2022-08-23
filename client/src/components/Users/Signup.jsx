import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"} textAlign={"center"}>
						Sign up create your account
					</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						to enjoy all of our cool features ✌️
					</Text>
				</Stack>
				<form action="/api/v1/register" method="post">
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}>
						<Stack spacing={4}>
							<FormControl id="fullName" isRequired>
								<FormLabel>Full Name</FormLabel>
								<Input type="text" name="name" autoComplete="off" />
							</FormControl>
							<FormControl id="email" isRequired>
								<FormLabel>Email address</FormLabel>
								<Input type="email" name="email" autoComplete="off" />
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										type={showPassword ? "text" : "password"}
										name="password"
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword((showPassword1) => !showPassword1)
											}>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<FormControl id="confirmPassword" isRequired>
								<FormLabel>Confirm Password</FormLabel>
								<InputGroup>
									<Input
										type={showConfirmPassword ? "text" : "password"}
										name="confirmPassword"
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowConfirmPassword(
													(showConfirmPassword1) => !showConfirmPassword1
												)
											}>
											{showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Stack spacing={10} pt={2}>
								<Button
									type="submit"
									loadingText="Submitting"
									size="lg"
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}>
									Sign up
								</Button>
							</Stack>
							<Stack pt={6}>
								<Text align={"center"}>
									Already a user? <Link color={"blue.400"}>Login</Link>
								</Text>
							</Stack>
						</Stack>
					</Box>
				</form>
			</Stack>
		</Flex>
	);
}
