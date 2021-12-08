import kdhr from '../assets/kdhr.png'

const TweetLists = () => {
    return (
        <div className="p-3 border border-1 tweet">
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img src={kdhr} alt="..." className="rounded-circle" width="50" height="50" />
                </div>
                <div class="flex-grow-1 ms-3">
                    <span className="fw-bold d-inline-block">工藤 晴香 <span className="text-muted">@kudoharu2702 ・25m</span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio corporis labore. Alias iure eaque dolorum suscipit iste eveniet obcaecati impedit laboriosam ipsum, magni quisquam ut. Ex magni quaerat explicabo?</p>
                    <span className="text-comment d-inline-block"><i class="bi bi-chat me-3"></i>3</span>
                    <span className="text-retweet d-inline-block ms-5"><i class="bi bi-arrow-repeat ms-5 me-3"></i>3</span>
                    <span className="text-like d-inline-block ms-5"><i class="bi bi-heart ms-5 me-3"></i>3</span>
                    <span className="text-share d-inline-block ms-5"><i class="bi bi-upload ms-5 me-3"></i></span>
                </div>
            </div>
        </div>
    );
}
 
export default TweetLists;