import React from 'react'

function TwoStateCallBackToBack() {
    const [val, setVal] = useState(false);

    const handleToggle = () => {
        setVal((prevVal) => !prevVal); // false => true
        setVal((prevVal) => !prevVal); // true => false
        console.log(val); // false
    };

    return (
        <>
            <div className="p-5 font-mono">
                <h1 className="text-2xl font-semibold">
                    Value : {val ? "Is ready to go" : "Not ready"}
                </h1>
                <button
                    onClick={handleToggle}
                    className="bg-sky-300 rounded-md px-3 py-1 text-sm mt-2"
                >
                    Change
                </button>
            </div>
        </>
    );
}

export default TwoStateCallBackToBack