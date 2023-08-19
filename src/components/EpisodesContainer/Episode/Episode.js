import React from 'react';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodesActions} from "../../../redux";

const Episode = ({episode}) => {
    const {air_date, name, episode: episodeName, characters} = episode;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toCharacters = () => {
        const iDs = characters.map(character =>character.split('/').slice(-1)[0]).join(',');
        navigate('/characters', {state:{iDs}})
        dispatch(episodesActions.steCurrentEpisode(name))
    }

    return (
        <Box sx={{width: '23% ', margin: '5px'}}>
            <Card variant="outlined">
                <CardContent>
                    {/*<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
                    {/*    Episode*/}
                    {/*</Typography>*/}
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography color="text.secondary">
                        {episodeName}
                    </Typography>
                    <Typography variant="body2">
                        {air_date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                            variant={'contained'}
                            style={{backgroundColor: '#312f2f'}}
                            onClick={() => toCharacters()}
                    >Characters</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export {Episode};