import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=HCM,madrid,london"
  );
  console.log("data",data);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.INzwMTGMj4BtlwCZhg1-TQHaEK?pid=ImgDet&w=1300&h=730&rs=1"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hồ Chí Minh</h1>
              <h2>{data[0]} Hotels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/R.60c663d2ccd0381873d8d09bfe8329b0?rik=UHUdhUtzMg6qxg&pid=ImgRaw&r=0"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Đà Nẵng</h1>
              <h2>{data[1]} Hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.roadaffair.com/wp-content/uploads/2019/06/skyline-night-hanoi-vietnam-shutterstock_565108885.jpg"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hà Nội</h1>
              <h2>{data[2]} Hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
