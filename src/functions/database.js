import { CardMedia, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export const splitListsByType = (lists) => {
    /**
     * Splits lists into different types
     */

    const listsByType = {}

    for (const list of lists) {
        if (list.type in listsByType) {
            listsByType[list.type].push(list)
        }
        else {
            listsByType[list.type] = [list]
        }
    }

    return listsByType
}

export const textToURL = (text) => {
    return text.replaceAll(' ', '-').toLowerCase()
}

// TODO - Change ALT to an prop
const CoverImageMediaWrapper = ({coverImages, ratio}) => {
    if (coverImages.length > 1) {
        return (
            <Grid xs={ratio} container sx={{display: {xs: 'none', sm: 'flex'}, justifyContent:'center',alignItems:'center'}}>
                <Carousel animation="fade" sx={{height:'80%', width:'80%', p: 3}}>
                    {coverImages.map((el, index) => {
                        return (
                            <CardMedia
                                // sx={{p: 3, maxWidth: '80%'}}
                                key={index}
                                component="img"
                                alt="movie cover"
                                image={el}
                            />
                        )
                    })}
                </Carousel>
            </Grid>
        )
    } else {
        return (
            <Grid xs={ratio} container sx={{display: {xs: 'none', sm: 'flex'}, justifyContent:'center',alignItems:'center'}}>
                <CardMedia
                    sx={{maxWidth: '80%', p: 3}}
                    component="img"
                    alt="movie cover"
                    image={coverImages[0]}
                />
            </Grid>
        )
    }
}

export const CoverImageMedia = ({coverImages, ratio}) => {
    return (
        <CoverImageMediaWrapper coverImages={coverImages} ratio={ratio}/>
    )
}