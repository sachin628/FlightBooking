// import React, { useContext, useEffect, useCallback } from "react";
import { Button, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../utils/validations";

import AppButton from "../../components/Common/AppButton";
import PrimaryInput from "../../components/Common/PrimaryInput";
import PrimaryPassword from "../../components/Common/PrimaryPassword";
// import useApi from "../../hooks/useApi";

const Login = () => {
    const navigate = useNavigate();
    return (
        <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align="center" justify="center">
                <Stack spacing={4} w="full" maxW="md">
                    <Heading fontFamily="Century Gothic" fontSize="2xl">
                        Login Your Account
                    </Heading>
                    <Formik
                        initialValues={{
                            email: "admin@fluper.com",
                            password: "Fluper@123",
                        }}
                        onSubmit={''}
                        validationSchema={loginSchema}
                    >
                        {(props) => (
                            <Form onSubmit={''}>
                                <Stack spacing="6">
                                    <Stack spacing="5">
                                        <PrimaryInput
                                            style={{ mt: "30px" }}
                                            label="Email Id"
                                            placeholder="Enter your email."
                                            name="email"
                                        />
                                        <PrimaryPassword
                                            style={{ mt: "20px" }}
                                            label="Password"
                                            placeholder="Enter your password."
                                            name="password"
                                        />
                                    </Stack>
                                    <HStack justify="space-between">
                                        <Button
                                            onClick={() => navigate(`/register`)}
                                            variant="link"
                                            colorScheme="blue"
                                            size="lg"
                                        >
                                            Register?
                                        </Button>
                                    </HStack>
                                    <AppButton label="Sign in" />
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Stack>
            </Flex>
        </Stack>
    );
};

export default Login;
