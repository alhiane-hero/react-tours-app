import {useState, useContext} from 'react';
import LocalContext from './LocalContext';
import {TourEl, ImgFluid, TourBody, TourInfo, TourInfoName,
    TourInfoPrice, TourDesc, ReadMoreBtn, RemoveTourBtn} from './Styled';

function Tour({id, name, info, image, price}) {

    const [readMore, setReadMore] = useState(false);

    const {removeTour} = useContext(LocalContext);

    return (
        <TourEl>
            <div className='Head'>
                <ImgFluid src={image} alt={name} />
            </div>
            <TourBody>
                <TourInfo>
                    <TourInfoName>Best Of Paris In 7 Days Tour</TourInfoName>
                    <TourInfoPrice>${price}</TourInfoPrice>
                </TourInfo>
                <TourDesc>
                    {readMore ? info : info.substring(0, 200) + '... '}
                    <ReadMoreBtn onClick={_ => setReadMore(!readMore)}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </ReadMoreBtn>
                </TourDesc>
                <RemoveTourBtn onClick={_ => removeTour(id)}>
                    Not Interested
                </RemoveTourBtn>
            </TourBody>
        </TourEl>
    );
}

export default Tour;