type ButtonProps = {
    text: string;
};
function Button({ text }: ButtonProps) {
    return (
        <button className="rounded bg-blue-500 text-white px-4 py-2 m-2 hover:bg-blue-600 transition duration-300">
            {text}
        </button>
    );
}

export default Button;