import ScanUrlSelector from './scan_url';
import FarmSettingSelector from './farm_setting';
import LaunchpadSettingSelector from './launchpad_setting';

export let constantInstance = {
    'scanUrlPrefix': ScanUrlSelector(56),
    'farmSetting': FarmSettingSelector(56),
    'launchpadSetting': LaunchpadSettingSelector(56),
};

export const SCAN_URL_PREFIX = () => constantInstance.scanUrlPrefix.scanUrl
export const LAUNCHPAD_ADDRESS = () => constantInstance.launchpadSetting.ADDRESS
export const LAUNCH_RPC_URL = () => constantInstance.launchpadSetting.RPC_URL
export const LAUNCH_MAIN_TOKEN = () => constantInstance.launchpadSetting.MAIN_TOKEN
export const API_URL = () => constantInstance.farmSetting.API_URL