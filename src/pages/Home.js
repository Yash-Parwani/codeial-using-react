import PropTypes from 'prop-types';

import { Comment } from '../components';
import styles from '../styles/home.module.css';
import {Link} from 'react-router-dom'

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
              <div>
                {/* using string interpolation so that we are able to add user id
                   post.user._id will give us id of the current user who is logged in


                   So we will show current users profile only
                */}
                <Link
                //  to={`/user/${post.user._id}`}  here we were passsing only path 

                // we will pass an object to 'to" attribute which will contain user data
                to={{
                  pathname : `/user/${post.user._id}`,
                  // passing user info via state to User Profile component
                  state:{
                          user: post.user,
                  }

                }}
                className={styles.postAuthor}>{post.user.name}</Link>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.conent}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <img
                  src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                  alt="comments-icon"
                />
                <span>{post.comments.length}</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => (
                <Comment comment={comment} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
