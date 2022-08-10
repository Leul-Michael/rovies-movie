import { useEffect, useRef, useState, useCallback } from "react";
import "./pagination.scss";

const Pagination = ({ pages, setPage }) => {
  const pagesRef = useRef(null);
  if (pages > 10) pages = 10;

  const [pagesLength, setPagesLength] = useState(0);

  const addPages = useCallback(
    (pagesLength) => {
      pagesRef.current.innerHTML = `<button class="btn btn-page btn-prev">Prev</button>
      <button class="btn btn-page btn-next">Next</button>`;
      for (var i = 1; i <= pagesLength; i++) {
        if (setPage.page === i) {
          pagesRef.current.innerHTML += `<button class="btn btn-page active">${i}</button>`;
        } else {
          pagesRef.current.innerHTML += `<button class="btn btn-page">${i}</button>`;
        }
      }
    },
    [setPage.page]
  );

  function setActive(num) {
    // console.log([...pagesRef.current.children]);
    [...pagesRef.current.children].forEach((btn, index) => {
      btn.classList.remove("active");
      if (num === index - 1) {
        btn.classList.add("active");
      }
    });
  }

  const changePage = (e) => {
    if (!e.target.closest(".btn-page")) return;
    if (e.target.classList.contains("btn-prev")) {
      setPage.setPage((prevPage) => prevPage - 1);
      setActive(setPage.page);
      return;
    } else if (e.target.classList.contains("btn-next")) {
      setPage.setPage((prevPage) => prevPage + 1);
      setActive(setPage.page);
      return;
    } else {
      setPage.setPage(parseInt(e.target.textContent));
    }
    setActive(parseInt(e.target.textContent));
  };

  useEffect(() => {
    setPagesLength(pages);
    addPages(pagesLength);
  }, [pagesLength, pages, addPages]);

  return (
    <div className="pages" ref={pagesRef} onClick={(e) => changePage(e)}></div>
  );
};

export default Pagination;
