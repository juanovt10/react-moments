import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css"
import { axiosReq } from '../../api/AxiosDefaults';
import { useCurrentUser } from '../../context/CurrentUserContext';
import Asset from '../../components/Asset';

export const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        pageProfile: {results: []},
        popularProfiles: {results: []},
    });

    const { popularProfiles} = profileData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    "/profiles/?ordering=-followers_count"
                );
                setProfileData(prevState => ({
                    ...prevState,
                    popularProfiles: {results: data},
                }));
            } catch(err) {
                console.log(err)
            }
        };

        handleMount()
    }, [currentUser]); 


    return (
        <Container className={appStyles.Content} >
            {popularProfiles.results?.length ? (
                <>
                    <p>Most followed profiles.</p>
                    {popularProfiles.results?.map(profile => (
                        <p key={profile.id}>{profile.owner}</p>
                    ))}                
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    )
}
