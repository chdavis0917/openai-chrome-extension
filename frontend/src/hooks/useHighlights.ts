import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReturnedHighlightData } from '../types';

export const useHighlights = () => {
  const [highlights, setHighlights] = useState<ReturnedHighlightData[]>([]);
  const [returnedHighlightData, setReturnedHighlightData] = useState<ReturnedHighlightData[]>([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/highlights');
        setHighlights(response.data.map((highlight: ReturnedHighlightData) => ({
          _id: highlight._id,
          url: highlight.url,
          highlightedText: highlight.highlightedText,
          summary: highlight.summary
        })));
        setReturnedHighlightData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHighlights();
  }, []);

  const deleteHighlight = async (_id: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/highlights/${_id}`);
      setHighlights((prevHighlights) =>
        prevHighlights.filter((highlight) => highlight._id !== _id)
      );
      setReturnedHighlightData((prevReturnedHighlightData) =>
        prevReturnedHighlightData.filter((highlight) => highlight._id !== _id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { highlights, deleteHighlight, returnedHighlightData };
};
