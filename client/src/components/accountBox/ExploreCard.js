import { QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { ExploreContainer } from "./Common.js";
import { Link } from "react-router-dom";

function ExploreCard(props) {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  console.log(data);

  return (
    <ExploreContainer>
      <h1 className="page__title">Explore</h1>
      {projects.map((projects) => (
        <div key={projects._id} className="explore__card">
          <div className="explore__card__title">
            <h3 className="project__title">
              <Link to={`/projects/${projects._id}`}>
                {projects.projectTitle}
              </Link>
            </h3>
          </div>
          <div className="explore__card__content">
            <h4 className="project__author">
              Created By: {projects.projectAuthor}
            </h4>
          </div>
        </div>
      ))}
    </ExploreContainer>
  );
}

export default ExploreCard;
