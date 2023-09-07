import getURL from "./getURL.js";

const urls = getURL();
const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchInput = document.querySelector(".search_input");
  const searchKeyword = searchInput?.value;
  const searchResultStatus = document.querySelector(".search_result_status");

  // 검색어가 없을경우
  if (!searchKeyword) {
    searchResultStatus.textContent = "검색어를 입력해주세요";
    return;
  }

  // 검색어가 존재할경우
  urls
    .then((championURLs) => {
      const championURL = championURLs[searchKeyword];

      if (championURL) {
        window.open(championURL);
        searchInput.value = "";
      } else {
        throw new Error("존재하지 않는 챔피언이에요");
      }
    })
    .catch((err) => (searchResultStatus.textContent = err.message));
});
