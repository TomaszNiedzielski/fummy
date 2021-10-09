import React from 'react';
import EditProfileModalContent from './contents/EditProfileModalContent';
import LoginModalContent from './contents/LoginModalContent';
import RegisterModalContent from './contents/RegisterModalContent';
import PrimaryModal from './PrimaryModal';
import EditOffersModalContent from './contents/edit_offers/EditOffersModalContent';

const GroupedModals: React.FC = () => (
    <>
        <PrimaryModal
            id="loginModal"
            title="Zaloguj się!"
            Content={LoginModalContent}
        />
        <PrimaryModal
            id="registerModal"
            title="Utwórz darmowe konto!"
            Content={RegisterModalContent}
        />
        <PrimaryModal
            id="editProfileModal"
            title="Edytuj profil"
            Content={EditProfileModalContent}
        />
        <PrimaryModal
            id="editOffersModal"
            title="Dodaj oferte"
            Content={EditOffersModalContent}
        />
    </>
);
export default GroupedModals;