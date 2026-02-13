import RoalingCards from "@/components/UI/RoalingCards/RoalingCards";

const AIModelsSection = () => {
  return (
    <section
      style={{
        background: "#0a0a0f",
        padding: "200px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Фиолетовый glow */}
      <div
        style={{
          position: "absolute",
          top: "-250px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "1000px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.25), transparent 60%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Верхний блок текста */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "white",
              marginBottom: "30px",
              lineHeight: "1.1",
            }}
          >
            Access Every Major AI Model
            <br />
            <span
              style={{
                background:
                  "linear-gradient(to right, #a855f7, #7c3aed)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              From One Unified Platform
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "20px",
              maxWidth: "750px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Stop switching between tools. Compare outputs, optimize prompts,
            and deploy intelligence from GPT, Gemini, Claude, DeepSeek and
            more — all inside one seamless ecosystem.
          </p>
        </div>

        {/* Фичи */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px",
            marginBottom: "140px",
          }}
        >
          {[
            {
              title: "Model Comparison",
              text: "Instantly compare responses from multiple AI models side-by-side.",
            },
            {
              title: "Unified Interface",
              text: "One workspace. One history. Full control over your AI stack.",
            },
            {
              title: "Optimized Performance",
              text: "Switch models based on task, speed, or cost — in seconds.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: "40px",
                borderRadius: "20px",
                background:
                  "linear-gradient(145deg, rgba(139,92,246,0.15), rgba(88,28,135,0.25))",
                border: "1px solid rgba(139,92,246,0.25)",
                boxShadow:
                  "0 10px 40px rgba(139,92,246,0.15)",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "22px",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: "1.6",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Колесо */}
        <RoalingCards />
      </div>
    </section>
  );
};

export default AIModelsSection;
