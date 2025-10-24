"use client"

import React from "react"
import { Linkedin, Github, FileText, Code, Mail } from "lucide-react"

export default function Socials() {
  const links = [
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-4 h-4" /> },
    { name: "GitHub", href: "https://github.com/Janhvibabani", icon: <Github className="w-4 h-4" /> },
    { name: "Resume", href: "https://drive.google.com/file/d/1OVE9yHbJtYw1uCwNhkN3DcfMFyfHZVbd/view?usp=sharing", icon: <FileText className="w-4 h-4" /> },
    { name: "LeetCode", href: "https://leetcode.com/janhvii_", icon: <Code className="w-4 h-4" /> },
    { name: "Blogs", href: "https://medium.com/@janhvibabani", icon: <img src="/medium-tile.svg" alt="Medium" className="w-5 h-5 block" /> },
    { name: "Mail", href: "mailto:janhvibabani.com", icon: <Mail className="w-4 h-4" /> },
  ]

  return (
    <nav aria-label="socials" className="py-4">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target={l.href.startsWith("#") ? undefined : "_blank"}
              rel={l.href.startsWith("#") ? undefined : "noreferrer"}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label={l.name}
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
