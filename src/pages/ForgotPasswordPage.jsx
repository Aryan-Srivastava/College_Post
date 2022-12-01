import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address"),
        }),
        onSubmit: async values => {
            console.log(values)
        },
    })
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-700">
            <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                    Reset Password
                </div>
                <div className="mt-8">
                    <form action="#" autoComplete="off">
                        <div className="flex flex-col mb-2">
                            <div className="flex relative">
                                <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                        </path>
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Your email"
                                    {...formik.getFieldProps("email")}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-xs italic mt-1">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                        <div className="mt-3 flex w-full">
                            <button
                                type="submit"
                                className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Send Mail
                            </button>
                        </div>
                        <div className="flex items-center justify-center mt-6 gap-8 ">
                            <Link
                                className="text-gray-800 dark:text-white hover:bg-gray-50 rounded-lg text-sm px-3 py-1.5 dark:hover:bg-gray-700"
                                to="/register"
                            >
                                Register
                            </Link>
                            <Link
                                className="text-gray-800 dark:text-white hover:bg-gray-50 rounded-lg text-sm px-3 py-1.5 dark:hover:bg-gray-700"
                                to="/login"
                            >
                                LogIn
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage