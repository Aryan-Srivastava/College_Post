import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import '../index.css'

const RegisterPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Please enter your first name"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Please enter your last name"),
            userName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Please enter your username"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address"),
            password: Yup.string()
                .min(6, "Must be 6 characters or more")
                .required("Please enter your password"),
        }),
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="login-register-wrapper">
                <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
                    Register
                </div>
                <div className="flex gap-4 item-center">
                    <button type="button" className="py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                            </path>
                        </svg>
                        Facebook
                    </button>
                    <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                            </path>
                        </svg>
                        Google
                    </button>
                </div>
                <div className="mt-8">
                    <form action="#" autoComplete="off">
                        <div className="flex flex-col mb-4">
                            {formik.errors.firstName && formik.touched.firstName ? (
                                <div className="text-red-500 text-xs italic mt-1">
                                    {formik.errors.firstName}
                                </div>
                            ) : null}
                            <div className="flex relative ">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    className=" inputField-login-register"
                                    {...formik.getFieldProps("firstName")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-4">
                            {formik.errors.lastName && formik.touched.lastName ? (
                                <div className="text-red-500 text-xs italic mt-1">
                                    {formik.errors.lastName}
                                </div>
                            ) : null}
                            <div className="flex relative">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className=" inputField-login-register"
                                    placeholder="Last Name"
                                    {...formik.getFieldProps("lastName")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-4">
                            {formik.errors.userName && formik.touched.userName ? (
                                <div className="text-red-500 text-xs italic mt-1">
                                    {formik.errors.userName}
                                </div>
                            ) : null}
                            <div className="flex relative ">
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    className=" inputField-login-register"
                                    placeholder="username"
                                    {...formik.getFieldProps("userName")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-4">
                            {formik.errors.email && formik.touched.email ? (
                                <div className="text-red-500 text-xs italic mt-1">
                                    {formik.errors.email}
                                </div>
                            ) : null}
                            <div className="flex relative ">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className=" inputField-login-register"
                                    placeholder="Email"
                                    {...formik.getFieldProps("email")}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            {formik.errors.password && formik.touched.password ? (
                                <div className="text-red-500 text-xs italic mt-1">
                                    {formik.errors.password}
                                </div>
                            ) : null}
                            <div className="flex relative ">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className=" inputField-login-register"
                                    placeholder="Password"
                                    {...formik.getFieldProps("password")}
                                />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <Link
                        className="tagline-login-register"
                        to="/login"
                    >
                        Already have an account ? LogIn
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage;
