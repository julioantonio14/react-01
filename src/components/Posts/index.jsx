import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';
export const Posts = ({ posts = [] }) => {
    return (
        <div className="posts">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

Posts.defaultProps = {
    posts: [],
};
Posts.propTypes = {
    posts: P.arrayOf(
        P.shape({
            title: P.string.isRequired,
            cover: P.string.isRequired,
            body: P.string.isRequired,
            id: P.number,
        }),
    ),
};
