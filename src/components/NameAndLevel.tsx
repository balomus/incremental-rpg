interface NameAndLevelProps {
  name: string;
  level: number;
  experience: number;
  maxExperience: number;
  gold: number;
}

const NameAndLevel = ({
  name,
  level,
  experience,
  maxExperience,
  gold,
}: NameAndLevelProps) => {
  return (
    <div className="pr-3">
      <div className="text-xl">{name}</div>
      <div>Level {level}</div>
      <div>
        XP: {experience} / {maxExperience}
      </div>
      <div>Gold: {gold}</div>
    </div>
  );
};

export default NameAndLevel;
