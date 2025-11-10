"use client"

const services = [
  {
    id: 1,
    title: "Experience",
    experiences: [
      {
        company: "Google - Youtube",
        role: "Software Engineering Intern",
        project: "Auto Placement of Stickers in Youtube Shorts",
        bullets: [
          "Worked in Auto Placement of Stickers in Youtube Shorts",
          "Developed automation scripts in Python on Google infrastructure, streamlining internal processes and reducing engineering overhead.",
          "Worked on prompt engineering and integration of computer vision models, enabling intelligent, AI-driven user experiences.",
          "Engineered an end-to-end AI solution from scratch, which demonstrated a successful performance benchmark of 70% accuracy.",
          "Communicated with cross country and cross team members for the discussion regarding the project",
        ],
        skills: ["Python", "Computer Vision", "YOLO", "AI", "Prompt engineering", "Google Colab"],
      },
      {
        company: "Amazon",
        role: "Software Engineering Intern",
        project: "Clean Decant and UI Filters",
        bullets: [
          "Implemented UI filters to classify test results -failed/success/exception, improving engineering efficiency by 20%",
          "Designed and launched a new decant flow, reducing per-task execution time by 25 minutes at scale.",
          "Enhanced user experience by optimizing backend logic, refining UI, and adding robust unit tests with Mockito",
        ],
        skills: ["TypeScript", "JavaScript", "Java", "Spring Boot", "React", "Angular", "Mockito"],
      },
    ],
  },
  {
    id: 2,
    title: "Projects",
    projects: [
      {
        title: "Chess Timer",
        url: "https://chess-timer-two.vercel.app/",
        image: "/chessTimer.png",
        description: "There was no pretty chess timer, so I made one — smooth, configurable horizontal/vertical layouts and pause support.",
        skills: ["TypeScript", "Next.js", "HTML", "CSS", "JavaScript"],
      },

      {
        title: "Photo-Booth",
        url: "https://photo-booth-sepia-chi.vercel.app/",
        image: "/photo-booth.png",
        description: "Made it to practice my nextjs skills. A simple photo booth app with download functionality.",
        skills: ["TypeScript", "Next.js", "HTML", "CSS", "JavaScript"],
      },
    ],
  },
  {
    id: 3,
    title: "Leetcode",
    leetcodeUser: "janhvii_",
  },
  {
    id: 4,
    title: "Github",
    githubUser: "Janhvibabani",
  },
]

export default function Services() {

  return (
    <section className="py-5 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service) => (
            <div key={service.id} className="border-b border-border py-6">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-serif font-light">{service.title}</h3>
              </div>

              <div className="pb-8 pl-0 pr-0">
                  {/* If this is the Experience service and has experiences, render accordion */}
                  {service.experiences ? (
                    <div className="space-y-6 mb-6">
                      {service.experiences.map((exp, eidx) => (
                        <div
                          key={eidx}
                          className="rounded-lg p-6 shadow-sm border border-border"
                          style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)" }}
                        >
                          <div className="flex items-center gap-4 text-lg">
                            {/* company logo if available */}
                            {exp.company?.toLowerCase().includes('google') && (
                              <img src="/google.svg" alt="Google" className="w-10 h-10 rounded-full" />
                            )}
                            {exp.company?.toLowerCase().includes('amazon') && (
                              <img src="/amazon.svg" alt="Amazon" className="w-10 h-10 rounded-full" />
                            )}
                            <div>
                              <div className="text-base font-semibold">{exp.company}</div>
                              <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>{exp.role}</div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="text-base" style={{ color: "var(--muted-foreground)" }}>{exp.project}</p>
                            {exp.skills ? (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {exp.skills.map((s, si) => (
                                  <span
                                    key={si}
                                    className="text-xs px-2 py-1 rounded-full"
                                    style={{ backgroundColor: "rgba(0,0,0,0.06)", color: "var(--muted-foreground)" }}
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                            {exp.bullets ? (
                              <ul className="mt-3 ml-5 list-disc text-base space-y-2" style={{ color: "var(--muted-foreground)" }}>
                                {exp.bullets.map((b, bi) => (
                                  <li key={bi}>{b}</li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* LeetCode profile card for service id 3 */}
                  {service.leetcodeUser && (
                    <div className="mt-6">
                      <a
                        href={`https://leetcode.com/${service.leetcodeUser}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-4"
                      >
                        <div className="rounded-md overflow-hidden">
                          <img
                            src={`https://leetcode-stats.vercel.app/api?username=${service.leetcodeUser}&theme=dark`}
                            alt={`LeetCode stats for ${service.leetcodeUser}`}
                            className="h-50 w-auto object-contain block"
                          />
                        </div>
                      </a>
                    </div>
                  )}
                  {/* GitHub profile card for service id 4 */}
                  {service.githubUser && (
                    <div className="mt-6">
                      <a
                        href={`https://github.com/${service.githubUser}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-4"
                      >
                        <div className="rounded-md overflow-hidden">
                          <img
                            src={`https://github-readme-stats.vercel.app/api?username=${service.githubUser}&show_icons=true&theme=radical`}
                            alt={`GitHub stats for ${service.githubUser}`}
                            className="h-50 w-auto object-contain block"
                          />
                        </div>
                      </a>
                    </div>
                  )}
                  {/* Projects grid for service id 2 */}
                  {service.projects && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {service.projects.map((p, pi) => (
                        <div key={pi} className="border rounded-lg overflow-hidden">
                          <div className="h-48" style={{ backgroundColor: "var(--muted)" }}>
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4 flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{p.title}</h4>
                              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{p.description}</p>
                              {p.skills && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {p.skills.map((sk, ski) => (
                                    <span key={ski} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "var(--muted)", color: "var(--muted-foreground)" }}>{sk}</span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <a href={p.url} target="_blank" rel="noreferrer" className="text-sm underline" style={{ color: "var(--primary)" }}>Open</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
