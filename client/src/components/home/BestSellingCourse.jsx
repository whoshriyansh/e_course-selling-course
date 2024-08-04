import React from "react";
import { courses } from "../../data/CourseData";
import CourseCard from "../../helper/common/CourseCard";

const BestSellingCourse = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Best Selling Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.slice(0, 12).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingCourse;
