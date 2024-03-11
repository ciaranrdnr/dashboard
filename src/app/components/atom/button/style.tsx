export const defaultClass =
  "align-middle justify-center items-center rounded-[6px]";
export const variantClass = {
  contained: ` px-4 py-1 text-white bg-blue-80 border border-blue-80 transition ease-in-out delay-150 outline-blue-60 
        hover:text-white/80 hover:bg-blue-100 hover:border-blue-100
        disabled:bg-grey-50 disabled:text-grey-100 disabled:border disabled:border-grey-50 disabled:cursor-default`,
  outlined: ` px-4 py-1 text-blue-80 border border-blue-80 transition ease-in-out delay-150 outline-blue-60
        hover:text-blue-100 bg-transparent hover:bg-blue-20 hover:border-blue-100
        disabled:bg-grey-50/20 disabled:text-grey-100 disabled:border disabled:border-grey-100 disabled:cursor-default
        `,
  text: "text-blue-80 outline-blue-40 hover:text-blue-100 disabled:text-grey-100 ",
};
export const sizeClass = {
  big: `text-base py-3 w-full rounded-xl`,
  default: `text-xs`,
};
