"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import Navbar from "@/components/layouts/Navbar";
import PhoneInput from "react-phone-input-2";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toast } from "sonner"
import { CheckCircle2 } from "lucide-react";

const options = [
    "Less than 5k USD",
    "5K - 10K USD",
    "10K - 50K USD",
    "50K - 100K USD",
    "More than 100K USD",
    "Need Help",
];
const Page = () => {
    const [open, setOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            yourName: "",
            phoneNumber: "",
            companyName: "",
            email: "",
            budget: "",
            message: "",
            agree: false,
        },
        validationSchema: Yup.object({
            yourName: Yup.string()
                .required("Name is required")
                .min(3, "Name must be at least 3 characters"),
            companyName: Yup.string()
                .required("Company name is required")
                .min(5, "Company name must be at least 5 characters"),
            phoneNumber: Yup.string()
                .required("Phone number is required")
                .matches(/^\d{10,15}$/, "Enter a valid phone number"),
            email: Yup.string()
                .required("Email is required")
                .email("Enter a valid email"),
            message: Yup.string()
                .required("Message is required")
                .min(5, "Message must be at least 5 characters"),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                setLoading(true)
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        access_key: '6798b9ae-9172-4ddd-b239-e872aba7050a',
                        ...values
                    })
                });

                const result = await response.json();
                if (result.success) {
                    toast.success("Form submitted!", {
                        description: (
                            <span className="text-black">
                                Thanks for reaching out. We'll get back to you soon.
                            </span>
                        ),
                        duration: 4000,
                        icon: <CheckCircle2 className="text-green-500" />,
                        className: "border border-green-200 bg-green-50 text-green-900",
                        descriptionClassName: "text-black",
                        style: {
                            backgroundColor: '#e7e5e4',
                        }
                    })
                    setLoading(false);
                    formik.resetForm();
                } else {
                    toast.error('Error submitting form', {
                        description: 'Please check your details and try again.',
                        duration: 4000,
                    });
                    setLoading(false);
                }
            } catch (error) {
                toast.error('Network error occurred', {
                    description: 'Please check your connection and try again.',
                    duration: 4000,
                });
                setSubmitting(false);
            }
        },
    });
    const [loading, setLoading] = useState(false);

    return (
        <div className="bg-gray-50">
            <Navbar />
            <div className="flex md:flex-row flex-col md:px-10 py-5">


                <div className="flex items-center justify-center md:w-[50%]">
                    <h1 className="text-5xl font-bold text-left bg-gradient-to-r from-blue-800  via-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Take The <br /> First Step <br />
                        Towards <br /> Accomplishing <br /> Your <br />
                        Business Goals
                    </h1>
                </div>

                <div className="ml-6 mr-10  md:mx-auto pt-8 md:px-10 flex-1">
                    <h1 className="text-3xl font-bold mb-8">Contact US</h1>

                    <form

                        onSubmit={formik.handleSubmit}
                        className="rounded-2xl space-y-4   "
                    >

                        <div className="flex md:flex-row flex-col gap-10">
                            <div className="flex-1">
                                <label className="block font-medium mb-1">Your Name</label>
                                <input
                                    type="text"
                                    name="yourName"
                                    value={formik.values.yourName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full border-b p-2 focus:outline-none focus:ring-0 ${formik.touched.yourName && formik.errors.yourName
                                        ? "border-red-500"
                                        : "border-gray-300"
                                        }`}
                                />
                                {formik.touched.yourName && formik.errors.yourName && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.yourName}
                                    </p>
                                )}
                            </div>
                            <div className="flex-1">
                                <label className="block font-medium mb-1">Phone Number</label>
                                <PhoneInput
                                    country={"in"}
                                    value={formik.values.phoneNumber}
                                    onChange={(phone) =>
                                        formik.setFieldValue("phoneNumber", phone)
                                    }
                                    inputProps={{ name: "phoneNumber",
                                        onBlur: () => formik.setFieldTouched("phoneNumber", true)
                                     }}
                                    containerClass="w-full relative"
                                    inputClass="!w-full !p-2 !pl-14 !focus:outline-none !focus:ring-0 !border-0 border-b !shadow-none !bg-transparent"
                                    buttonClass="!border-0 !bg-transparent !absolute !left-0 flex items-center justify-center"
                                    dropdownClass="!bg-white !shadow-lg !border !rounded-md"
                                    // Key prop - prevents manual editing of country code
                                    countryCodeEditable={false}
                                    // Optional: Enable search in dropdown for better UX
                                    enableSearch={true}
                                    searchPlaceholder="Search countries..."
                                />
                                <hr
                                    className={`mt-1 ${formik.errors.phoneNumber
                                        ? "bg-red-500 h-0.5"
                                        : "bg-gray-300 h-0.5"
                                        }`}
                                />
                                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.phoneNumber}
                                    </p>
                                )}
                            </div>

                        </div>

                        <div className="flex gap-10 md:flex-row flex-col md:mt-0 md:pt-2 pt-6">
                            <div className="flex-1">
                                <label className="block font-medium mb-1">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formik.values.companyName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                     className={`w-full border-b p-2 focus:outline-none focus:ring-0 ${formik.touched.companyName && formik.errors.companyName
                                        ? "border-red-500"
                                        : "border-gray-300"
                                        }`}
                                />
                                {formik.touched.companyName && formik.errors.companyName && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.companyName}
                                    </p>
                                )}
                            </div>

                            <div className="flex-1">
                                <label className="block font-medium mb-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full border-b md:mb-0 mb-6 p-2 focus:outline-none focus:ring-0 ${formik.touched.email && formik.errors.email
                                        ? "border-red-500"
                                        : "border-gray-300"
                                        }`}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                                )}
                            </div>
                        </div>

                        {/* <div>
<label className="block font-medium mb-1">Budget</label>
<select
                name="budget"
                value={formik.values.budget}
                onChange={formik.handleChange}
                className="w-full border-b p-2 focus:outline-none focus:ring-0"
>
<option value="">Select Budget</option>
                {options.map((opt) => (
<option key={opt} value={opt}>
                    {opt}
</option>
                ))}
</select>
</div> */}
                        <div className="mb-8 md:mb-2">
                            {" "}
                            <label className="block font-medium  md:mb-2 mb-4">Budget</label>{" "}
                            <div className="relative w-full">
                                {" "}
                                <button
                                    type="button"
                                    onClick={() => setOpen(!open)}
                                    className="w-full border-b p-2 text-left focus:outline-none focus:ring-0"
                                >
                                    {" "}
                                    {formik.values.budget || "Select Budget"}{" "}
                                </button>{" "}
                                {open && (
                                    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-lg p-3 z-10">
                                        {" "}
                                        <h3 className="font-semibold mb-2">Budgets</h3>{" "}
                                        <div className="space-y-3">
                                            {" "}
                                            {options.map((option) => (
                                                <label
                                                    key={option}
                                                    className="flex items-center gap-2 p-1 m-0 cursor-pointer text-gray-700 rounded-lg hover:bg-gray-100"
                                                >
                                                    {" "}
                                                    <input
                                                        type="radio"
                                                        name="budget"
                                                        value={option}
                                                        checked={formik.values.budget === option}
                                                        onChange={(e) => {
                                                            formik.handleChange(e);
                                                            setOpen(false)
                                                        }}
                                                        className="text-blue-600 focus:ring-0"
                                                    />{" "}
                                                    {option}{" "}
                                                </label>
                                            ))}{" "}
                                        </div>{" "}
                                    </div>
                                )}{" "}
                                <span className="absolute right-2 text-gray-700 top-1/2 -translate-y-1/2 pointer-events-none">
                                    {" "}
                                    ▼{" "}
                                </span>{" "}
                            </div>{" "}
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                rows={1}
                                className={`w-full border-b p-2 focus:outline-none focus:ring-0 ${formik.touched.message && formik.errors.message
                                    ? "border-red-500"
                                    : "border-gray-300"
                                    }`}
                            />
                            {formik.touched.message && formik.errors.message && (
                                <p className="text-red-500 text-sm">{formik.errors.message}</p>
                            )}
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formik.values.agree}
                                onChange={formik.handleChange}
                                className="mr-2 h-5 w-5 accent-blue-600"
                            />
                            <label>I agree to receive SMS and WhatsApp</label>
                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className={cn(
                                "w-[100px] font-semibold py-2 my-4 rounded-lg transition-all duration-200",
                                loading
                                    ? "cursor-not-allowed opacity-50 bg-gray-400 text-gray-600"
                                    : "cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
                            )}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>




                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
