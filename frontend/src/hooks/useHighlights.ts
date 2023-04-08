import { useState, useEffect } from 'react';
import axios from 'axios';
import { Highlight } from '../types';

export const useHighlights = (initialHighlights: Highlight[]) => {
  const [highlights, setHighlights] = useState(initialHighlights);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await axios.get('/api/highlights');
        setHighlights(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHighlights();
  }, []);

  const addHighlight = async (newHighlight: Highlight) => {
    try {
      const response = await axios.post('/api/highlights', newHighlight);
      setHighlights((prevHighlights) => [...prevHighlights, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHighlight = async (id: number) => {
    try {
      await axios.delete(`/api/highlights/${id}`);
      setHighlights((prevHighlights) =>
        prevHighlights.filter((highlight) => highlight.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };
  

  return { highlights, addHighlight, deleteHighlight };
};
