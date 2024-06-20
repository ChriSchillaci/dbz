import { TypeButton } from "@/types/charTypes";
import { NextRouter } from "next/router";

// let scrollTimer: number | NodeJS.Timeout;

// const scrollToTop = () => {
//   clearTimeout(scrollTimer);

//   scrollTimer = setTimeout(() => {
//     window.scrollTo({ top: 0 });
//   }, 1);
// };

export const handlePageBtn = (
  type: TypeButton,
  page: number | string | string[],
  router: NextRouter,
  totalPages?: number
) => {
  const pageNumber = Number(page);
  if (type === "decrement") {
    // scrollToTop();
    router.push(`/?page=${pageNumber - 1}`);
  } else if (type === "increment") {
    // scrollToTop();
    router.push(`/?page=${pageNumber + 1}`);
  } else if (type === "dbl-decrement") {
    // scrollToTop();
    router.push(`/?page=1`);
  } else {
    // scrollToTop();
    router.push(`/?page=${totalPages}`);
  }
};
