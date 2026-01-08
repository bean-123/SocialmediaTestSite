import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../assets/assets";

export default function StoriesBar() {
  const [stories, setStories] = useState([]);

  const fetchStories = async () => {
    setStories(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4">
      <div className="flex gap-4 pb-5">
        {/* Add Story Card */}
        <div></div>
        {/* Story Cards */}
      </div>
    </div>
  );
}
