import BorderGlow from "./BorderGlow";

// The card every section sits in: a translucent panel whose border lights up in the
// site's purple/pink/blue only when the cursor is near an edge. The inner fill is off
// and the outer glow kept small so large sections don't wash over with colour.
// Content may contain sticky (pinned) elements, so overflow stays visible, and
// min-w-0 stops wide children (the skills marquee) from stretching the card's grid.
const SectionGlow = ({ children, className = "", padding = "p-5 sm:p-10" }) => (
  <BorderGlow
    className={className}
    contentClassName={`overflow-visible min-w-0 ${padding}`}
    edgeSensitivity={55}
    glowColor="262 100 75"
    backgroundColor="rgba(16, 13, 37, 0.72)"
    borderRadius={28}
    glowRadius={18}
    glowIntensity={0.45}
    coneSpread={15}
    animated={false}
    colors={["#915EFF", "#f272c8", "#4f7cff"]}
    fillOpacity={0}
  >
    {children}
  </BorderGlow>
);

export default SectionGlow;
