export default function Experience() {
  const experience = [
    {
      date: "July 2025 - Present",
      role: "Backend Engineer & Solo Flutter Engineer",
      place: "Technova Technologies",
      image: "/technova-logo.png",
    },
    {
      date: "March 2025 - Present",
      role: "Full Stack Developer",
      place: "CNAFF Abia State Revenue Revenue Management System",
      image: "/cnaff.png",
    },
    {
      date: "Oct 2024 - Aug 2025",
      role: "Frontend Lead",
      place: "Tabs",
      image: "/tab.webp",
    },
    {
      date: "Feb 2024 - Nov 2025",
      role: "Lead Mobile App Developer",
      place: "Engy (formerly Esports NG)",
      image: "/esportsng.png",
    },
    {
      date: "June 2024",
      role: "Freelance Developer",
      place: "Jumbo Fresh Farm Products",
      image: "/jumbo.png",
    },
    {
      date: "June 2023 - Present",
      role: "Solo Developer",
      place: "Smart Arena Nigeria",
      image: "smart-arena.png",
    },
    {
      date: "2024",
      role: "Solo Developer",
      place: "Oversight",
      image: "/oversight.png",
    },
    {
      date: "Feb 2023 - Jan 2024",
      role: "Frontend Developer",
      place: "Sharperly",
      image: "",
    },
  ];
  return (
    <div>
      <h4 className="font-medium text-4xl tracking-tighter">
        My work experience
      </h4>
      <div className="space-y-5 mt-5">
        {experience.map((item, key) => {
          return (
            <div
              key={key}
              className="flex sm:flex-row flex-col gap-1 text-sm sm:text-lg sm:items-center sm:gap-32"
            >
              <h4 className="w-48">{item.date}</h4>
              <div className="flex items-center gap-2 sm:gap-3">
                <h4>
                  <span className="text-darkText">
                    {item.role} &nbsp; &nbsp;
                  </span>{" "}
                  at
                </h4>
                {item.image && (
                  <img
                    src={item.image}
                    alt="logo"
                    className="object-cover h-4 sm:h-6 rounded-sm"
                  />
                )}
                <h4 className="text-darkText">{item.place}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
