import TweetLists from "./TweetLists";

const Home = () => {
    return (
        <div className="col-md-6">
            <div className="fs-5 py-2 px-3 sticky-top fw-bold border border-1 bg-dark">Home</div>
            <TweetLists />
            <TweetLists />
        </div>
    );
}
 
export default Home;