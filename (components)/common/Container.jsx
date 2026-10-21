// components/Container.jsx

export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-330 mx-auto ${className}`}>
      {children}
    </div>
  );
}