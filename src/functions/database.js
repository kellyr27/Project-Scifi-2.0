import { CardMedia } from '@mui/material';
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
const CoverImageMediaWrapper = ({coverImages}) => {
    if (coverImages.length > 1) {
        return (
            <Carousel animation="fade">
                {coverImages.map((el, index) => {
                    return (
                        <CardMedia
                            sx={{p: 2}}
                            key={index}
                            component="img"
                            alt="movie cover"
                            image={el}
                        />
                    )
                })}
            </Carousel>
        )
    } else {
        return (
            <CardMedia
                sx={{p: 2}}
                component="img"
                alt="movie cover"
                image={coverImages[0]}
            />
        )
    }
}

export const CoverImageMedia = ({coverImages}) => {
    return (
        <div className="ProductDetails">
            <CoverImageMediaWrapper coverImages={coverImages} />
        </div>
    )
}