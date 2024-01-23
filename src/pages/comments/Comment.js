import React from 'react';
import styles from "../../styles/Comment.module.css";
import { Media } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar';

export const Comment = (props) => {
    const {
        profile_id,
        profile_img,
        owner,
        updated_at,
        content,
    } = props

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
            </Media>
        </div>
    )
}
