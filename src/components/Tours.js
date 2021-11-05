import Tour from './Tour';
import {ToursHeading, ToursHeadingH2, ToursHeadingLine} from './Styled';
// import './Tours.css'

function Tours({tours, removeTour}) {
    return (
        <div className="ToursConatiner">
            <ToursHeading>
                <ToursHeadingH2>Our Tours</ToursHeadingH2>
                <ToursHeadingLine></ToursHeadingLine>
            </ToursHeading>
            <div className='Tours'>{
                tours.map(tour => {
                    return <Tour key={tour.id} {...tour} />
                })
            }</div>
        </div>
    );
}

export default Tours;
