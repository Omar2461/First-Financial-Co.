function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={` bg-linear-to-b from-[#8C8C70]  to-[#3d3d30] font-bold flex justify-center items-center text-lg rounded-lg shadow-xl/30  gap-1 py-2 px-5
           hover:scale-112  transition-all duration-400 text-white ${className}`}
    >
      {children}
    </div>
  );
}

export default Button;
