import CombatArea from "./CombatArea";

const CombatAreas = () => {
  return (
    <div className="border-transparent border-2 rounded-md p-3 mb-5 bg-white/10">
      <CombatArea
        name={"Grassy Plains"}
        levelRequirement={1}
        minNumberOfEnemies={2}
        maxNumberOfEnemies={3}
        elligibleEnemies={["Bat", "Rat", "Slime"]}
      />
    </div>
  );
};

export default CombatAreas;
