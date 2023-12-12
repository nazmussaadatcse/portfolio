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
