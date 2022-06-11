import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
    id: string;
    title: string;
    Content: React.FC;
    contentProps?: any;
}

export const hideModal = () => {
    const closeButtons = document.getElementsByClassName('close');

    for (let i = 0; i < closeButtons.length; i++) {
        const button = closeButtons[i] as HTMLElement;
        button.click();
    }
}

const PrimaryModal: React.FC<Props> = ({ id, title, Content, contentProps }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            hideModal();
        }

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, []);

    return (
        <div className="modal vh-100" id={id} tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered my-0 vh-100" role="document">
                <div className="modal-content">
                    <div className="px-2">
                        <button type="button" className="close d-flex" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="overflow-auto">
                        <div className="px-2">
                            <h3 className="modal-title w-100 text-center font-weight-bold primary-color">{title}</h3>
                        </div>
                        <div className="modal-body">
                            <Content {...contentProps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PrimaryModal;