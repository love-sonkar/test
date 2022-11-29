import CloseIcon from "@mui/icons-material/Close";

const ExpenseItem = ({ items, remove }) => {
  return (
    <div className="w-full relative border my-2 p-2 shadow-md rounded">
      <div>
        <p className="text-sm">{items.time}</p>
        <h1 className="text-black capitalize mr-5">{items.des}</h1>
        <p className="bg-airbnb-pink max-w-max my-2 text-white py-0 rounded px-4">
          {items.amount}
        </p>
      </div>
      <span
        onClick={() => remove(items)}
        className="cursor-pointer absolute right-1 top-0 text-airbnb-pink"
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default ExpenseItem;
