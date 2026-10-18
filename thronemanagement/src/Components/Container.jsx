const Container = ({ className = '', children }) => (
    <div className={`mx-auto w-full max-w-[1440px] ${className}`}>{children}</div>
);

export default Container;
