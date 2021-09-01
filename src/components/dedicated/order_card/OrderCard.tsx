import React, { useState } from 'react';
import styles from './OrderCard.module.css';
import { post, Response } from '../../../helpers/ApiRequest';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../buttons/primary/PrimaryButton';
import { toast } from 'react-toastify';
import CountdownTimer from '../countdown/Countdown';

interface Props {
    id: number | string;
    title: string;
    instructions: string;
    deadline: string;
    purchaser: string;
    price: number;
    currency: string;
}

const OrderCard: React.FC<Props> = ({ id, title, instructions, deadline, purchaser, price, currency }) => {
    const { token } = useSelector((state: RootState) => state.auth);

    const [video, setVideo] = useState<File>();
    const [isLoading, setIsLoading] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const onChange = (e: any) => {
        const video = e.target.files[0];

        setVideo(video);
    }

    const uploadVideo = () => {
        const formData = new FormData();
        formData.append('video', video);
        formData.append('orderId', id.toString());

        setIsLoading(true);
        post('video/upload?token='+token, formData, true)
        .then((response: Response) => {
            setIsLoading(false);

            if(response.code === 200) {
                setVideo(null);
                setIsCompleted(true);
                toast.success('Zamówienie zostało zrealizowane.');
            } else {
                toast.error('Coś poszło nie tak.');
            }
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.scrollable}>
                <div className="w-100 d-flex flex-column">
                    <div className="d-flex">
                        <div className={styles.title}>{title}</div>
                        <div className={styles.new}>NEW</div>
                    </div>
                    <div className={styles.instructions}>{instructions}</div>
                    <div className="w-100 d-flex justify-content-between my-3">
                        <div className={styles.price}>{price} {currency}</div>
                        <div>
                            <span className="primary-color">{purchaser}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <CountdownTimer date={deadline} />
                    </div>
                </div>
                {!isCompleted ? <div className="w-100 d-flex flex-column align-items-center">
                    <div className={styles.upload}>
                        <label className={styles.label}>
                            <input type="file" className={styles.input} accept="video/mp4,video/x-m4v,video/*" onChange={e => onChange(e)} />
                            <img alt="upload" src="/icons/upload.png" />
                            {!video ? <div>Upuść video tutaj lub kliknij,<br/> aby wybrać z galerii.</div> : <div>{video.name}</div>}
                        </label>
                    </div>
                </div> : <div className="text-center text-success mt-4">Zamówienie zostało zrealizowane.</div>}
            </div>
            {video &&
            <div className="w-100 d-flex justify-content-center pt-2">
                <PrimaryButton title="Dodaj" onClick={uploadVideo} isLoading={isLoading} />
            </div>}
        </div>
    );
}
export default OrderCard;