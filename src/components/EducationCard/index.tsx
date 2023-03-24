import { Container, Cover, SchoolStyle } from "./styles";

interface EducationCardProps {
  image: string;
  school: string;
  course: string;
  date?: string;
  project?: string;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  image,
  school,
  course,
  date,
  project,
}) => {
  return (
    <Container className="card w-100">
      <div className="row row-cols-2 w-100 justify-content-between align-items-center">
        <div className="col mt-2 ms-2">
          <SchoolStyle>{school}</SchoolStyle>
          <p>{course}</p>
          <p className="d-lg-none">{date}</p>
          <p>{project}</p>
        </div>
        <Cover className="col" style={{ backgroundImage: `url(${image})` }} />
      </div>
    </Container>
  );
};
