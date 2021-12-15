import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { post, Response } from '../../../../helpers/ApiRequest';
import { RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';
import PrimaryButton from '../../../buttons/primary/PrimaryButton';
import { toast } from 'react-toastify';
import CountdownTimer from '../../countdown/Countdown';
import { API_STORAGE } from '../../../../constants';
import Link from 'next/link';
import Moment from 'react-moment';
import 'moment/locale/pl';
import { isLinkExternal } from '../../../../helpers/Link';

interface Props {
    id: number | string;
    title: string;
    description: string;
    instructions: string;
    deadline: string;
    purchaser: string;
    price: number;
    currency: string;
    thumbnail?: string;
    videoName?: string;
    processingComplete?: number;
    unrealized?: boolean;
    videoCreatedAt?: string;
}

const ProgressBar = ({ progress }) => (
    <div className={styles.loadingBar}>
        <div style={{ width: progress }}></div>
    </div>
);

const OrderCard: React.FC<Props> = ({ id, title, description, instructions, deadline, purchaser, price, currency, thumbnail, videoName, processingComplete, unrealized, videoCreatedAt }) => {
    const { nick } = useSelector((state: RootState) => state.profile);

    const [video, setVideo] = useState<File>();
    const [isUploading, setIsUploading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [uploadMessage, setUploadMessage] = useState('Upuść video tutaj lub kliknij, aby wybrać z galerii.');
    const [uploadProgress, setUploadProgress] = useState('0%');
    const [statusIcon, setStatusIcon] = useState<string>('upload');
    const [isCompleted, setIsCompleted] = useState(false);
    const [videoError, setVideoError] = useState<string>();

    useEffect(() => {
        if(video && !isUploading) {
            setUploadMessage(video.name);
            setStatusIcon('upload');
        } else {
            setUploadMessage('Upuść video tutaj lub kliknij, aby wybrać z galerii.');
        }

        if(isUploading) {
            setUploadMessage('Trwa dodawanie video...');
            setStatusIcon('clock');
        }

        if(isUploaded) {
            setUploadMessage('Trwa przetwarzanie video. Może to zająć kilka minut.');
            setStatusIcon('clock');
        }

        if(thumbnail && videoName) {
            setIsCompleted(true);
            setUploadMessage('Zamówienie zostało zrealizowane.');
            setStatusIcon('tick');
        }

        if(processingComplete === 0) {
            setUploadMessage('Trwa przetwarzanie video. Może to zająć kilka minut.');
            setStatusIcon('clock');
        }
    }, [video, isUploading, isUploaded, thumbnail, videoName, processingComplete]);

    const onChange = (e: any) => {
        setVideoError('');
        setVideo(null);

        const video = e.target.files[0];

        if(!video) return;

        if(video.size > 209715200) {
            setVideoError('Video nie może być większe niż 200MB.');
            return;
        }

        const url = URL.createObjectURL(video);
        const videoEl = document.createElement('video');
        videoEl.src = url;
        videoEl.addEventListener('loadedmetadata', function () {
            const ratio = Math.round(this.videoWidth/this.videoHeight * 100)/100;

            if(ratio < 0.50 || ratio > 0.60) {
                setVideoError('Video powinno być pionowe, w proporcji 9/16.');
            }

            if(this.duration > 60) {
                setVideoError('Video nie może być dłuższe niż 1 minuta.');
            }
        });

        setVideo(video);
    }

    const onUploadProgress = (p: any) => {
        setUploadProgress(Math.round(p.loaded/p.total*100)+'%');
    }

    const uploadVideo = () => {
        const formData = new FormData();
        formData.append('video', video);
        formData.append('orderId', id.toString());

        setIsUploading(true);
        post('videos', formData, onUploadProgress)
        .then((response: Response) => {
            if(response.code === 200) {
                setVideo(null);
                setIsUploaded(true);
            } else {
                toast.error('Coś poszło nie tak.');
            }
        })
        .catch(({ response }) => {
            if(response.status === 422) {
                toast.error('Nieobsługiwany typ pliku.');
            }
        })
        .then(() => setIsUploading(false));
    }

    return (
        <div className={styles.container}>
            <div className={styles.scrollable}>
                <div className={styles.price}>{price} {currency}</div>
                <div className="w-100 d-flex flex-column">
                    {thumbnail && <div className={styles.thumbnailContainer}>
                        <Link href={`/u/${nick}/video/${videoName}`}>
                            <div className="position-relative d-flex justify-content-center">
                                <div className={styles.thumbnailBackground}>
                                    <img src={isLinkExternal(thumbnail) ? thumbnail : `${API_STORAGE}thumbnails/${thumbnail}`} />
                                </div>
                                <img src={isLinkExternal(thumbnail) ? thumbnail : `${API_STORAGE}thumbnails/${thumbnail}`} className={styles.thumbnail} />
                            </div>
                        </Link>
                    </div>}
                    <div className={styles.specification}>
                        <div className={styles.specificationTitle}>Nazwa oferty</div>
                        <div className={styles.specificationBody}>{title}</div>
                    </div>
                    <div className={styles.specification}>
                        <div className={styles.specificationTitle}>Opis oferty</div>
                        <div className={styles.specificationBody}>{description}</div>
                    </div>
                    <div className={styles.specification}>
                        <div className={styles.specificationTitle}>Klient</div>
                        <div className={styles.specificationBody}>{purchaser}</div>
                    </div>
                    <div className={styles.specification}>
                        <div className={styles.specificationTitle}>Instrukcja do wykonania</div>
                        <div className={styles.specificationBody}>{instructions}</div>
                    </div>
                    {!isCompleted && <div className={styles.specification}>
                        <div className={styles.specificationTitle}>Czas na wykonanie zamówienia</div>
                        <CountdownTimer date={deadline} />
                    </div>}
                    {isCompleted && videoCreatedAt && <div className={styles.specification}>
                        <div className={styles.specificationTitle}>Zrealizowano</div>
                        <div className={styles.specificationBody}>
                            <Moment format="lll">{videoCreatedAt}</Moment>
                        </div>
                    </div>}
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                    {!unrealized && <div className={styles.upload}>
                        <label className={styles.label}>
                            {!isUploaded && !isCompleted && <input type="file" className={styles.input} accept="video/mp4,video/x-m4v,video/*" onChange={e => onChange(e)} />}
                            <img alt="state" src={`/icons/${statusIcon}.png`} />
                            {<div className={styles.fileName}>{uploadMessage}</div>}
                            {isUploading && <ProgressBar progress={uploadProgress} />}
                        </label>
                    </div>}
                    <div className={styles.error}>{videoError}</div>
                </div>
            </div>
            {video && !isUploading && !videoError &&
            <div className="w-100 d-flex justify-content-center pt-2">
                <PrimaryButton title="Dodaj" onClick={uploadVideo} />
            </div>}
        </div>
    );
}
export default OrderCard;