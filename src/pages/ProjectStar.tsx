import React, { useState } from "react";
import { selectorFamily, useRecoilValue } from "recoil";
import axios from "axios";

const projectStar = selectorFamily({
  key: "project/star",
  get: (projectPath: string) => async () => {
    if (!projectPath) return "";

    const { data } = await axios.get(
      `https://api.github.com/repos/${projectPath}`
    );
    return data.stargazers_count;
  },
});

const ProjectStar: React.FC = () => {
  const [project, setProject] = useState("");
  const starCount = useRecoilValue(projectStar(project));
  const changeProject = ({ target }: any) => setProject(target.value);

  return (
    <div>
      Project:
      <select onChange={changeProject}>
        <option value="">Select Project</option>
        <option value="facebook/react">React</option>
        <option value="facebookexperimental/Recoil">Recoil</option>
      </select>
      <br />
      Stars : {starCount}
    </div>
  );
};
export default ProjectStar;
