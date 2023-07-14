interface NameAndLevelProps {
  name: string;
  level: number;
  experience: number;
  maxExperience: number;
}

const NameAndLevel = ({
  name,
  level,
  experience,
  maxExperience,
}: NameAndLevelProps) => {
  return (
    <div className="pr-3">
      <div className="text-xl">{name}</div>
      <div>Level {level}</div>
      <div>
        {experience} / {maxExperience}
      </div>
    </div>
  );
};

export default NameAndLevel;
