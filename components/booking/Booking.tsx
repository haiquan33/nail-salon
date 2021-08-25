import { Button } from '.';
import styles from 'styles/components/Booking.module.css';

export const Booking = (props: any) => {
    return <div className={ `${ styles['floating-booking-btn'] } text-center` }>
        <div className="flex justify-center items-center gap-4 sm:gap-10">
            <Button href="" type="Booking"/>

            <Button href="" type="Checkin"/>
        </div>
    </div>;
};
