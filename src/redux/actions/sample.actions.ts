import { Dispatch } from 'redux';
import {
  SAMPLE_FAIL,
  SAMPLE_REQUEST,
  SAMPLE_SUCCESS,
} from '../constants/sample.constants';
import { StoreReducerTypes } from '../store';

export const addSampleUser =
  () =>
  async (dispatch: Dispatch, getState: (value: StoreReducerTypes) => any) => {
    try {
      dispatch({ type: SAMPLE_REQUEST });
      const data = {};

      dispatch({ type: SAMPLE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: SAMPLE_FAIL,
        payload:
          error?.response && error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message,
      });
    }
  };
