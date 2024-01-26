 
 import styles from '../styles/home.module.css';
 
 const Home = () =>{

    return (

        <div className={styles.postList}>
            <div className={styles.postwrapper}>
                <div className={styles.postHeader}>
                    <div className={styles.postAvatar}>
                        <img
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt="user-pic"
                        />
                        <div>
                            <span className={styles.postAuthor}>Dhitosh</span>
                            <span className={styles.postTime}> a minute ago</span>


                        </div>
                    </div>
                    <div className={styles.postContent}>Post content</div>

                    <div className={styles.postActions}>
                        <div className={styles.postLike}>
                            <img
                            src="https://cdn-icons-png.flaticon.com/128/3670/3670215.png"
                            alt="likes-icon"
                            />
                            <span>5</span>
                        </div>


                        <div className={styles.postCommentsIcon}>
                            <img
                            src="https://cdn-icons-png.flaticon.com/128/25/25663.png"
                            alt="comments-icon"
                            />

                            <span>2</span> 
                        </div>

                        <div className={styles.postCommentBox}>
                            <input placeholder="start-typing  a comment"/>
                        </div>


                        <div className={styles.postCommentList}>
                            <div className={styles.postCommentItem}>
                                <div className={styles.postCommentHeader}>

                                    <span className={styles.postAuthor}>Bill</span>
                                    <span className={styles.postCommentTime}>a minute ago</span>
                                    <span className={styles.postCommentLikes}>50</span>

                                </div>

                                <div className={styles.postCommentContent}>Random comment</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );

};

export default Home;