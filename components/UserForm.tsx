"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const UserForm: React.FC = () => {


    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setErrorMessage("");
        const res = await fetch("/api/Users", {
            method: "POST",
            body: JSON.stringify({ formData }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
            console.log(response);
        } else {
            router.refresh();
            router.push("/");
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                method="post"
                className="flex flex-col gap-3 w-1/2"
            >
                <h1>Create New User</h1>
                <label>Full Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.name}
                    className="m-2 bg-slate-400 rounded"
                />
                <label>Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.email}
                    className="m-2 bg-slate-400 rounded"
                />
                <label>Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required={true}
                    value={formData.password}
                    className="m-2 bg-slate-400 rounded"
                />
                <input
                    type="submit"
                    value="Create User"
                    className="bg-blue-300 hover:bg-blue-100"
                />
            </form>
            <p className="text-red-500">{errorMessage}</p>
        </>
    );
};

export default UserForm;