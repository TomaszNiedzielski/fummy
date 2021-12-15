import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { put } from '../../helpers/ApiRequest';
import { UPDATE_PROFILE_DETAILS } from '../../redux/actions/user/Profile';
import { RootState } from '../../redux/store';
import ToggleSwitch from '../inputs/toggle_switch/ToggleSwitch';

const _24HrDelivery: React.FC = () => {
    const { token } = useSelector((state: RootState) => state.auth);
    const { profile } = useSelector((state: RootState) => state);

    const dispatch = useDispatch();

    const updateDeliveryTimeStatus = (is24HoursDeliveryOn: boolean) => {
        profile.is24HoursDeliveryOn = !profile.is24HoursDeliveryOn;

        dispatch({ type: UPDATE_PROFILE_DETAILS, payload: profile });

        put('users/delivery-time-status', { is24HoursDeliveryOn });
    }

    return (
        <section className="w-100 primary-box mt-3">
            <div className="d-flex justify-content-between">
                <div>
                    <h5>Dostępność w 24 godziny</h5>
                    <div className="font-small">
                        Im szybciej tym lepiej. Dasz radę nagrać video w 24 godziny? Twoi fani będą zachwycenii.
                        Ludzie kochają szybkie realizacje, korzystająć z tej opcji twoja prowizja, zwiększy się o 5%.
                    </div>
                </div>
                {profile.is24HoursDeliveryOn !== null && <ToggleSwitch
                    checked={profile.is24HoursDeliveryOn}
                    onChange={val => updateDeliveryTimeStatus(val)}
                />}
            </div>
        </section>
    );
}
export default _24HrDelivery;