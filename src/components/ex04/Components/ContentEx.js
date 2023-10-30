// import "../css/conEx.css";

const conApi = [
  {
    id: 0,
    imgUrl:
      "https://img.freepik.com/free-photo/bukhansan-mountains-is-covered-by-morning-fog-and-sunrise-in-seoul-korea_335224-501.jpg",
    title: "Mountain",
    desc: "산입니다",
  },
  {
    id: 1,
    imgUrl:
      "https://health.chosun.com/site/data/img_dir/2023/05/31/2023053102582_0.jpg",
    title: "Sea",
    desc: "바다입니다",
  },
  {
    id: 2,
    imgUrl:
      "https://cdn.catholicnews.co.kr/news/photo/202001/22135_43951_5525.jpg",
    title: "Sky",
    desc: "하늘입니다",
  },
];

export const ContentEx = () => {
  return (
    <div className="con_wrap">
      {conApi.map((con) => (
        <div className="con" key={con.id}>
          <div>
            <div className="img_box">
              <img src={con.imgUrl} />
            </div>
            <h3>{con.title}</h3>
            <div>{con.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
