import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Bredcrumbs = (firstItem, lastItem) => {
  return (
    <div className="breadcrumbs">
      <ul>
        <li>
          <Link href={"/"}>Home</Link> <MdKeyboardArrowRight />
        </li>
        <li>
          <Link href={"/"}>{productData.categorey}</Link>{" "}
          <MdKeyboardArrowRight />
        </li>
        <li>
          <span>{productData.title}</span>
        </li>
      </ul>
    </div>
  );
};

export default Bredcrumbs;
