
import { Link } from "react-router-dom";

interface MainCardComponentProps {
    link : string,
    name : string,
    to : string
}

const MainCardComponent = ({link, name, to} : MainCardComponentProps) => {
  return (
    <Link to={to}>
    <div className="w-96 h-72 border rounded-lg border-gray-500 flex flex-col items-center p-2">
      <div className="w-80 h-64 overflow-hidden bg-gray-200 group-hover:opacity-75 ">
        <img
          src={link}
          alt={name}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="flex justify-center m-4 font-semibold">{name}</div>
    </div>
    </Link>
  );
};

export default MainCardComponent;
