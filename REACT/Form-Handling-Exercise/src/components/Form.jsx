import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data) => {
        handleFormSubmitData(data);
        reset();
    };

    return (
        <div className="mt-8 font-mono">
            <form
                className="flex justify-center gap-5"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <input
                    {...register("name")}
                    className="px-3 py-2 rounded-md font-semibold text-md outline-none shadow-lg"
                    type="text"
                    placeholder="Name"
                />
                <input
                    {...register("email")}
                    className="px-3 py-2 rounded-md font-semibold text-md outline-none shadow-lg"
                    type="email"
                    placeholder="Email"
                />
                <input
                    {...register("image")}
                    className="px-3 py-2 rounded-md font-semibold text-md outline-none shadow-lg"
                    type="text"
                    placeholder="Image url"
                />

                <input
                  
                    className="px-4 py-2 rounded-md text-sm text-md outline-none bg-red-600 text-white shadow-lg"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default Form;
