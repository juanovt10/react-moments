import React from 'react';
import styles from "../../styles/Comment.module.css";
import { Media } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../context/CurrentUserContext';
import MoreDropdown from '../../components/MoreDropdown';
import { axiosRes } from '../../api/AxiosDefaults';

export const Comment = (props) => {
    const {
        profile_id,
        profile_img,
        owner,
        updated_at,
        content,
        id,
        setPost,
        setComments,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`)
            setPost(prevPost => ({
                results: [{
                    ...prevPost.results[0],
                    comments_count: prevPost.results[0].comments_count - 1
                }]
            }))

            setComments(prevComments => ({
                ...prevComments,
                results: prevComments.results.filter(comment => comment.id !== id),
            }))
        } catch(err) {

        }
    }

    return (
        <div>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`} >
                    <Avatar src={profile_img} />
                </Link>
                <Media.Body className='align-self-center ml-2' >
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    <p>{content}</p>
                </Media.Body>
                {is_owner && (
                    <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete}/>
                )}
            </Media>
        </div>
    )
}
