export const courses = [
  {
    id: 1,
    title:
      "Complete Website Responsive Design: from Figma to Webflow to Website Design",
    price: 14.0,
    description: "Learn machine learning from scratch with hands-on examples.",
    category: "Design",
    rating: 5.0,
    image: "https://example.com/image1.jpg",
    createdBy: ["Vako Shvili", "Nima Tahami"],
    field: "Web Development",
    studentsEnrolled: 265.7,
    whatYouWillLearn: [
      "Build responsive websites with Figma",
      "Design and build with Webflow",
      "Understand web design principles",
      "Make a living as a freelance web designer",
    ],
    whoThisCourseIsFor: [
      "Beginners in web design",
      "People looking to build a personal website",
      "Freelancers wanting to expand their skillset",
    ],
    requirements: [
      "Basic computer skills",
      "No prior web design experience needed",
    ],
    curriculum: [
      {
        section: "Getting Started",
        lectures: [
          { title: "Welcome", duration: "2 min" },
          { title: "Course Overview", duration: "5 min" },
        ],
      },
      {
        section: "Web Design Basics",
        lectures: [
          { title: "Introduction to Figma", duration: "15 min" },
          { title: "Building Layouts", duration: "25 min" },
        ],
      },
    ],
    instructors: [
      {
        name: "Vako Shvili",
        bio: "Web designer with over 10 years of experience",
        rating: 4.9,
        totalCourses: 10,
        students: 200000,
      },
      {
        name: "Nima Tahami",
        bio: "Expert in Webflow and Figma",
        rating: 4.7,
        totalCourses: 8,
        students: 150000,
      },
    ],
    fullRating: {
      overallRating: 4.8,
      ratings: {
        5: 700,
        4: 50,
        3: 10,
        2: 5,
        1: 2,
      },
      reviews: [
        {
          name: "James Doe",
          comment: "Great course, learned a lot!",
          rating: 5,
        },
        {
          name: "Sarah Lee",
          comment: "Very detailed and informative.",
          rating: 4,
        },
      ],
    },
  },
];
