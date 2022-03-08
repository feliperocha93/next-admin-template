interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  type?: 'text' | 'email' | 'password';
  handleChange: (value: any) => void
}

function AuthInput({handleChange, label, value, type, required}: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input
        type={type}
        name=""
        id=""
        value={value}
        onChange={e => handleChange?.(e.target.value)}
        required={required ?? false}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2
          border focus:border-blue-500 focus:bg-white
          focus:outline-none
        `}
      />
    </div>
  );
}

export default AuthInput;
