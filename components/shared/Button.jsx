const Button = ({ children, className = "btn-primary" }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
