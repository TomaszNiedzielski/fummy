import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { post } from '../../helpers/ApiRequest';
import { UPDATE_PROFILE_DETAILS } from '../../redux/actions/user/Profile';
import { RootState } from '../../redux/store';
import ToggleSwitch from '../inputs/toggle_switch/ToggleSwitch';

const ActivityStatus: React.FC = () => {
    const { token } = useSelector((state: RootState) => state.auth);
    const { profile } = useSelector((state: RootState) => state);

    const dispatch = useDispatch();

    const updateActivityStatus = (status: boolean) => {
        profile.isActive = !profile.isActive;

        dispatch({ type: UPDATE_PROFILE_DETAILS, payload: profile });

        post('profile/update-activity-status?token='+token, { isActive: status });
    }

    return (
        <section className="w-100 primary-box mt-3">
            <div className="d-flex justify-content-between">
                <div>
                    <h5>Status aktywności</h5>
                    <div className="font-small">
                        Jeżeli nie masz aktualnie czasu, bądź jesteś na wakacjach, możesz wyłączyć czasowo swoją aktywność.
                        Przestaniesz otrzymywać wtedy nowe zamówienia. Wyłączenie aktywności nie
                        spowoduje utraty, aktualnych zamówień.
                    </div>
                </div>
                {profile.isActive !== null && <ToggleSwitch
                    checked={profile.isActive}
                    onChange={val => updateActivityStatus(val)}
                />}
            </div>
        </section>
    );
}
export default ActivityStatus;