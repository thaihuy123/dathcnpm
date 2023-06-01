import { combineReducers } from "redux";
import danhSachDonHangReducer from "../../containers/HomeTemplate/DanhSachDonHang/modules/reducer";
import detailDonHangReducer from "../../containers/HomeTemplate/DetailDonHang/modules/reducer";

const rootReducer = combineReducers({
    danhSachDonHangReducer,
    detailDonHangReducer
})

export default rootReducer;