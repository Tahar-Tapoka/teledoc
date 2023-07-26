import { createContext, useContext, useState } from "react";
import { Review } from "../models";
import { DataStore } from "aws-amplify";

const ReviewContext = createContext();

export const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const fetchLimitedReviews = async (dr) => {
    try {
      const limitedReviews = await DataStore.query(
        Review,
        (rv) => rv.consultantID.eq(dr.id),
        {
          limit: 2, // Fetch only 2 reviews
        }
      );
      setReviews(limitedReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  const fetchAllReviews = async (dr) => {
    try {
      const allReviews = await DataStore.query(Review, (rv) =>
        rv.consultantID.eq(dr.id)
      );
      setReviews(allReviews);
      //   setShowAllReviews(true);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  return (
    <ReviewContext.Provider value={{ fetchLimitedReviews, fetchAllReviews }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = () => useContext(ReviewContext);
