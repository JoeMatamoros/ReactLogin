function FormAction({caption, onClick}){
  let myClasses = [
    "w-full",
    "items-center",
    "justify-center",
    "px-8",
    "py-4",
    "my-4",
    "border",
    "border-transparent",
    "text-base",
    "font-medium",
    "rounded-lg",
    "text-black",
    "text-black",
    "bg-green-300",
    "hover:bg-indigo-200",
    "md:py-4",
    "md:text-lg",
    "md:px-10"
  ];
  return(
    <button
      onClick={onClick}
      className={myClasses.join(" ")}
    >
      {caption}
    </button>
  );
}

export default FormAction;
