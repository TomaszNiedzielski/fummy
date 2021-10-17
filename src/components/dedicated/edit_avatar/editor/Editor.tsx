import React, { useState, useCallback } from 'react';
import styles from './Editor.module.css';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../../../helpers/CropImage';

interface Props {
    image: string;
    onCrop: (croppedImg: string) => void;
    aspect: number;
    shape: 'round' | 'rect';
    onCancel: () => void;
}

const Editor: React.FC<Props> = ({ image, onCrop, aspect, shape, onCancel }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState();

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const onAccept = async () => {
        const croppedImg = await getCroppedImg(image, croppedAreaPixels) as string;
        onCrop(croppedImg);
    }

    return (
        <div className={styles.container}>
            <div className={styles.cropper}>
                <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={aspect}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    cropShape={shape}
                />
            </div>
            <div className={styles.manager}>
                <button className="btn btn-secondary" onClick={onCancel}>Anuluj</button>
                <button className="btn btn-primary mr-0 mr-md-4 ml-4" onClick={onAccept}>Akceptuj</button>
            </div>
        </div>
    );
}
export default Editor;