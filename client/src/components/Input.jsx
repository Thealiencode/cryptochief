
const Input = ({ placeholder, name, type, value, handleChange }) => 
    <input 
        placeholder={placeholder} 
        type={type} 
        value={value} 
        onChange={(e) => handleChange(e, name)} 
        step="0.001"
        className="my-2 w-full rounded-sm p-2 outline-none bg-trnasparant text-white border-none text-sm white-glassmorphism"/>


export default Input