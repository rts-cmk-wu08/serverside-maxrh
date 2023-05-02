import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

const NextBreadcrumbs = ({ crumbs, color }) => {
    return (
      <nav className="flex justify-center" aria-label="Breadcrumb">
        <ol className={`flex items-center ${color}` }>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
  
            return (
              <li key={crumb.slug} className={isLast ? "flex items-center underline" : "flex items-center"}>
                {isLast ? (
                  <span>{crumb.title}</span>
                ) : (
                  <><Link href={crumb.slug}>{crumb.title}</Link> <IoChevronForward className="ml-1 mr-1 text-xs translate-y-px"/></>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };
  
  export default NextBreadcrumbs;