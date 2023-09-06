const getURL = async () => {
  try {
    const response = await fetch("./url.json");
    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err);
  }
};

export default getURL;

// TODO: 현재는 미리 수집한 json data기반이지만 추후 런타임환경에서 수집해야할수도 있기 때문에 남겨둡니다.
const championAnchors = document.querySelectorAll(
  "#content-container aside nav ul li a"
);
const championURLs = [...championAnchors].map((dom) => ({
  [dom.textContent]: dom.href,
}));
