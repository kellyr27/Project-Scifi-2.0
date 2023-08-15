import { CardMedia, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import '../App.css';

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

export const CoverImageMedia = ({coverImages, ratio, altText}) => {
    if (coverImages.length > 1) {
        return (
            <Grid xs={ratio} container sx={{display: {xs: 'none', sm: 'flex'}, justifyContent:'center',alignItems:'center'}}>
                <Carousel animation="fade" sx={{display: 'block', minWidth: '80%', p: 5}}>
                    {coverImages.map((el, index) => {
                        return (
                            <CardMedia
                                key={index}
                                component="img"
                                alt={altText}
                                image={el}
                                sx={{width: '100%'}}
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
                    sx={{maxWidth: '80%', p: 5}}
                    component="img"
                    alt={altText}
                    image={coverImages[0]}
                />
            </Grid>
        )
    }
}

export const CoverImageMedia2 = ({coverImages, ratio, altText}) => {
    if (coverImages.length > 1) {
        return (
            <Grid container sx={{display: {xs: 'flex', sm: 'none'}, justifyContent:'center',alignItems:'center'}}>
                <Carousel animation="fade" sx={{display: 'block', minWidth: '150px', pt: 2}}>
                    {coverImages.map((el, index) => {
                        return (
                            <CardMedia
                                key={index}
                                component="img"
                                alt={altText}
                                image={el}
                                sx={{minWidth: '150px'}}
                            />
                        )
                    })}
                </Carousel>
            </Grid>
        )
    } else {
        return (
            <Grid xs={ratio} container sx={{display: {xs: 'flex', sm: 'none'}, justifyContent:'center',alignItems:'center'}}>
                <CardMedia
                    sx={{maxWidth: '150px', pt: 2}}
                    component="img"
                    alt={altText}
                    image={coverImages[0]}
                />
            </Grid>
        )
    }
}