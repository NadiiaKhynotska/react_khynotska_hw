import React from 'react';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const Episode = ({episode}) => {
    const{air_date, name, episode:episodeName, characters}= episode;

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Episode
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {episodeName}
                    </Typography>
                    <Typography variant="body2">
                        {air_date}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant={'contained'} >Characters</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export {Episode};