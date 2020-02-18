import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import useInput from './useLike';
import url from '../constants/apiData.json';

describe('the useLike hook', () => {
  it('should make an api call to fetch defaut text and set it in state', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { data: { count: 0 } } });
    const { result, waitForNextUpdate } = renderHook(() => useInput({}, url.url));
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith(url.url);
    expect(result.current[0]).toEqual(0);
  });
  it('should update the params when the setParams function is called', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { data: { count: 0 } } });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useInput({}, url.url));
    await waitForNextUpdate();
    expect(result.current[0]).toEqual(0);
    act(() => {
      result.current[1](1);
    });
    expect(result.current[0]).toEqual(1);
  });
  it('should update the listLoadComplete to true when the api call is done', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { data: { count: 0 } } });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useInput({}, url.url));
    await waitForNextUpdate();
    expect(result.current[2]).toBe(true);
  });
});
