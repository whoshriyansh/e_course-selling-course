import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/CourseData";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">{course.title}</h1>
      <div className="flex">
        <div className="w-3/4">
          <img src={course.image} alt={course.title} className="w-full mb-4" />
          <p>{course.description}</p>
          <h2 className="text-2xl font-bold my-4">What you'll learn</h2>
          <ul className="list-disc list-inside">
            {course.whatYouWillLearn.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold my-4">Who this course is for</h2>
          <ul className="list-disc list-inside">
            {course.whoThisCourseIsFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold my-4">Course requirements</h2>
          <ul className="list-disc list-inside">
            {course.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold my-4">Curriculum</h2>
          {course.curriculum.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{section.section}</h3>
              <ul className="list-decimal list-inside">
                {section.lectures.map((lecture, idx) => (
                  <li key={idx}>
                    {lecture.title} - {lecture.duration}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-1/4 p-4 border-l">
          <h2 className="text-xl font-bold">Course Rating</h2>
          <p>Overall Rating: {course.fullRating.overallRating}</p>
          <div className="my-4">
            {Object.entries(course.fullRating.ratings).map(([star, count]) => (
              <div key={star} className="flex items-center">
                <span>{star} ⭐:</span>
                <span className="ml-2">{count}</span>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold">Reviews</h2>
          {course.fullRating.reviews.map((review, index) => (
            <div key={index} className="border-b py-2">
              <p>{review.name}</p>
              <p>{review.comment}</p>
              <p>Rating: {review.rating} ⭐</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
