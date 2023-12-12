import { useQuery } from "react-query";

const useSkills = () => {

  const { data: skills=[] } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await fetch('/public/skills.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });


  return [skills];
};

export default useSkills;


[
    {
      "id": 1,
      "name": "React",
      "image": "https://i.ibb.co/rkSv0sL/react.png"
    },
    {
      "id": 2,
      "name": "Tailwind",
      "image": "https://i.ibb.co/kcsb21L/tailwind-removebg-preview.png"
    },
    {
      "id": 3,
      "name": "Next.js",
      "image": "https://i.ibb.co/0DfQpcr/next-removebg-preview.png"
    },
    {
      "id": 4,
      "name": "React Query",
      "image": "https://i.ibb.co/71KCBkB/react-query.png"
    },
    {
      "id": 5,
      "name": "JavaScript",
      "image": "https://i.ibb.co/fCx7TWT/js.png"
    },
    {
      "id": 6,
      "name": "MongoDB",
      "image": "https://i.ibb.co/g37NLsd/mongodb.png"
    },
    {
      "id": 7,
      "name": "Node.js",
      "image": "https://i.ibb.co/MCzpbhY/node.png"
    },
    {
      "id": 8,
      "name": "Express",
      "image": "https://i.ibb.co/jhn0hdV/express-js.png"
    }
  ]