function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
