const Button = ({ title }) => {
  return (
    <button
      type="button"
      className=" cursor-pointer font-base text-black bg-crimson rounded-[2px] font-bold py-2 px-6 outline-none text-[16px]"
    >
      {title}
    </button>
  );
};
export default Button;
