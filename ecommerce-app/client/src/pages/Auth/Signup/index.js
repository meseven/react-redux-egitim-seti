import React from "react";
import {
	Flex,
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Alert,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import validationSchema from "./validations";

function Signup() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			passwordConfirm: "",
		},
		validationSchema,
		onSubmit: async (values, bag) => {
			console.log(values);
		},
	});

	return (
		<div>
			<Flex align="center" width="full" justifyContent="center">
				<Box pt={10}>
					<Box textAlign="center">
						<Heading>Sign Up</Heading>
					</Box>
					<Box my={5} textAlign="left">
						<form onSubmit={formik.handleSubmit}>
							<FormControl>
								<FormLabel>E-mail</FormLabel>
								<Input
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>
							</FormControl>

							<FormControl mt="4">
								<FormLabel>Password</FormLabel>
								<Input
									name="password"
									type="password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
								/>
							</FormControl>

							<FormControl mt="4">
								<FormLabel>Password Confirm</FormLabel>
								<Input
									name="passwordConfirm"
									type="password"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.passwordConfirm}
								/>
							</FormControl>

							<Button mt="4" width="full" type="submit">
								Sign Up
							</Button>
						</form>
					</Box>
				</Box>
			</Flex>
		</div>
	);
}

export default Signup;
