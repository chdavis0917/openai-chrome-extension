import { useHighlights } from '../hooks/useHighlights';
import { ReturnedHighlightData } from '../types.d';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';

jest.mock('axios');

describe('useHighlights', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch and set the highlights data', async () => {
    const responseData: ReturnedHighlightData[] = [
      {
        _id: '1',
        url: 'http://example.com',
        highlightedText: 'some text',
        summary: {
          text: "summary text",
          index: 1,
          logprobs: "log",
          finish_reason: "finished"
        },
      },
    ];
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: responseData });

    const { result, waitForNextUpdate } = renderHook(() => useHighlights());

    expect(result.current.highlights).toEqual([]);
    expect(result.current.returnedHighlightData).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.highlights).toEqual(responseData);
    expect(result.current.returnedHighlightData).toEqual(responseData);
  });

  it('should delete a highlight', async () => {
    const responseData: ReturnedHighlightData[] = [
      {
        _id: '1',
        url: 'http://example.com',
        highlightedText: 'some text',
        summary: {
          text: "summary text",
          index: 1,
          logprobs: "log",
          finish_reason: "finished"
        },
      },
    ];
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: responseData });
    (axios.delete as jest.MockedFunction<typeof axios.delete>).mockResolvedValueOnce({});

    const { result, waitForNextUpdate } = renderHook(() => useHighlights());

    await waitForNextUpdate();

    expect(result.current.highlights).toEqual(responseData);

    const deletedId = '1';
    await result.current.deleteHighlight(deletedId);

    expect(result.current.highlights).toEqual([]);
    expect(axios.delete).toHaveBeenCalledWith(`/api/highlights/${deletedId}`);
  });
});
