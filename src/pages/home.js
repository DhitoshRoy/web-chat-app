 const Home = () =>{

    return (

        <div className="post-list">
            <div className="post-wrapper">
                <div className="post-header">
                    <div className="post-avatar">
                        <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt="user-pic"
                        />
                        <div>
                            <span className="post-author">Dhitosh</span>
                            <span className="post-author"> a minute ago</span>


                        </div>
                    </div>
                    <div className="post-content">Post content</div>

                    <div className="post-actions">
                        <div className="post-like">
                            <img
                            src="https://cdn-icons-png.flaticon.com/128/3670/3670215.png"
                            alt="likes-icon"
                            />
                            <span>5</span>
                        </div>


                        <div className="post-comments-icon">
                            <img
                            src="https://cdn-icons-png.flaticon.com/128/25/25663.png"
                            alt="comments-icon"
                            />

                            <span>2</span>

                            
                        </div>

                        <div className="post-comment-box">
                            <input placeholder="start-typing  a comment"/>
                        </div>


                        <div className="post-comment-list">
                            <div className="post-comment-item">
                                <div className="post-comment-header">

                                    <span className="post-comment-author">Bill</span>
                                    <span className="post-comment-time">a minute ago</span>
                                    <span className="post-comment-likes">32</span>

                                </div>

                                <div className="post-comment-content">Random comment</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );


};

export default Home;