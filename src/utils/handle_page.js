const scrollToTop = () => {
  let scrollTimer;
  clearTimeout(scrollTimer);

  setTimeout(() => {
    scrollTimer = window.scrollTo({ top: 0 });
  }, 1);
};

export const handlePageBtn = (type, setPage, totalPages) => {
  if (type === "decrement") {
    setPage((prev) => --prev);
    scrollToTop();
  } else if (type === "increment") {
    setPage((prev) => ++prev);
    scrollToTop();
  } else if (type === "dbl-decrement") {
    setPage(1);
    scrollToTop();
  } else {
    setPage(totalPages);
    scrollToTop();
  }
};
