import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUpRight, CornerDownLeft, TerminalSquare } from "lucide-react";
import { career, navigation, portfolio, skillGroups, systemAreas, type NavId } from "../data/portfolio";

interface TerminalEntry {
  readonly id: number;
  readonly command: string;
  readonly response: string;
  readonly error?: boolean;
}

interface TerminalProps {
  readonly onNavigate: (id: NavId) => void;
  readonly theme: "green" | "amber";
  readonly onToggleTheme: () => void;
}

const commands = [
  "help",
  "whoami",
  "about",
  "skills",
  "experience",
  "systems",
  "education",
  "contact",
  "linkedin",
  "github",
  "resume",
  "theme",
  "ls",
  "clear",
];

const sectionLookup: Readonly<Record<string, NavId>> = {
  about: "about",
  skills: "expertise",
  experience: "experience",
  systems: "systems",
  contact: "contact",
};

const helpText = [
  "AVAILABLE COMMANDS",
  "",
  "  whoami      get the quick introduction",
  "  about       read the longer story",
  "  skills      explore the engineering stack",
  "  experience  show the career timeline",
  "  systems     explore engineering focus areas",
  "  education   education and certification",
  "  contact     find my email",
  "  linkedin    open LinkedIn profile",
  "  github      open GitHub profile",
  "  resume      open source profile PDF",
  "  theme       toggle the terminal palette",
  "  ls          list portfolio sections",
  "  clear       clear terminal output",
  "",
  "TIP: use ↑/↓ for command history and Tab to autocomplete.",
].join("\n");

function getCommandResponse(command: string): string | null {
  switch (command) {
    case "help":
      return helpText;
    case "whoami":
      return `${portfolio.name}\n${portfolio.role} · ${portfolio.location}\n.NET / C#  ·  React / TypeScript  ·  Azure\nDesigning secure, scalable distributed systems.`;
    case "about":
      return portfolio.summary;
    case "skills":
      return skillGroups.map(({ title, skills }) => `${title}\n  ${skills.join(" · ")}`).join("\n\n");
    case "experience":
      return career.map(({ period, company, title }) => `${period}\n  ${title} @ ${company}`).join("\n\n");
    case "systems":
      return systemAreas.map(({ heading, description }) => `${heading}\n  ${description}`).join("\n\n");
    case "education":
      return `${portfolio.education.degree}\n${portfolio.education.institution} (${portfolio.education.years})\n\n${portfolio.certification}\n${portfolio.languages.join("\n")}`;
    case "contact":
      return `EMAIL    ${portfolio.email}\nLINKEDIN ${portfolio.linkedin}\nGITHUB   ${portfolio.github}`;
    case "ls":
      return navigation.map(({ id }) => `${id}/`).join("    ");
    case "sudo":
      return "Access denied. Least privilege is a feature, not a bug.";
    default:
      return null;
  }
}

export function Terminal({ onNavigate, theme, onToggleTheme }: TerminalProps) {
  const [entries, setEntries] = useState<readonly TerminalEntry[]>([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<readonly string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [nextId, setNextId] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [entries]);

  const submit = (raw: string): void => {
    const command = raw.trim().toLowerCase();
    if (!command) return;

    setHistory((previous) => [...previous, command].slice(-50));
    setHistoryIndex(null);
    setValue("");

    if (command === "clear") {
      setEntries([]);
      return;
    }

    let response = getCommandResponse(command);
    let error = false;

    if (command === "linkedin") {
      window.open(portfolio.linkedin, "_blank", "noopener,noreferrer");
      response = "Opening LinkedIn profile in a new tab...";
    } else if (command === "github") {
      window.open(portfolio.github, "_blank", "noopener,noreferrer");
      response = "Opening GitHub profile in a new tab...";
    } else if (command === "resume") {
      window.open("/profile.pdf", "_blank", "noopener,noreferrer");
      response = "Opening the original LinkedIn profile PDF...";
    } else if (command === "theme") {
      onToggleTheme();
      response = `Theme switched to ${theme === "green" ? "amber" : "green"}.`;
    } else if (response === null) {
      error = true;
      response = `Command not found: ${command}\nType 'help' for available commands.`;
    }

    const target = sectionLookup[command];
    if (target) onNavigate(target);
    setEntries((previous) => [...previous, { id: nextId, command, response, error }]);
    setNextId((previous) => previous + 1);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    submit(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (history.length === 0) return;
      const index = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(index);
      setValue(history[index] ?? "");
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === null) return;
      const index = historyIndex + 1;
      setHistoryIndex(index >= history.length ? null : index);
      setValue(index >= history.length ? "" : (history[index] ?? ""));
    } else if (event.key === "Tab") {
      const match = commands.find(
        (command) => command.startsWith(value.toLowerCase()) && command !== value.toLowerCase(),
      );
      if (match) {
        event.preventDefault();
        setValue(match);
      }
    } else if (event.key.toLowerCase() === "l" && event.ctrlKey) {
      event.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div className="terminal" aria-label="Interactive portfolio terminal">
      <div className="terminal__titlebar">
        <div className="terminal__lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal__title">
          <TerminalSquare aria-hidden="true" size={14} /> visitor@shivam — bash
        </div>
        <div className="terminal__version">v1.0.0</div>
      </div>
      <div className="terminal__output" ref={outputRef} role="log" aria-live="polite" aria-relevant="additions">
        <div className="terminal__ascii" aria-hidden="true">
          {
            "  ____  _   _ _____   ____  _   _   _    __  __\n / ___|| | | |_   _| / ___|| | | | / \\  |  \\/  |\n \\___ \\| |_| | | |   \\___ \\| |_| |/ _ \\ | |\\/| |\n  ___) |  _  | | |    ___) |  _  / ___ \\| |  | |\n |____/|_| |_| |_|   |____/|_| |_/_/   \\_\\_|  |_|"
          }
        </div>
        <div className="terminal__init">
          [ <span>OK</span> ] Portfolio initialized.
          <br />[ <span>OK</span> ] Connection established.
          <br />[ <span>OK</span> ] Welcome, curious human.
        </div>
        <p className="terminal__welcome">
          Type{" "}
          <button type="button" className="inline-command" onClick={() => submit("help")}>
            help
          </button>{" "}
          to see what you can explore.
        </p>
        {entries.map((entry) => (
          <div key={entry.id} className="terminal__entry">
            <div className="terminal__entered">
              <span className="terminal__prompt-text">visitor@shivam:~$</span> {entry.command}
            </div>
            <pre className={entry.error ? "terminal__response terminal__response--error" : "terminal__response"}>
              {entry.response}
            </pre>
          </div>
        ))}
      </div>
      <form className="terminal__input-row" onSubmit={handleSubmit}>
        <label htmlFor="terminal-command" className="terminal__prompt-text">
          visitor@shivam:~$
        </label>
        <input
          ref={inputRef}
          id="terminal-command"
          className="terminal__input"
          aria-label="Terminal command"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command..."
        />
        <button type="submit" className="terminal__enter" aria-label="Run command" title="Run command">
          <CornerDownLeft size={18} aria-hidden="true" />
        </button>
      </form>
      <div className="terminal__footer">
        <span>TRY A COMMAND</span>
        <div className="terminal__shortcuts">
          {(["whoami", "skills", "experience", "contact"] as const).map((command) => (
            <button key={command} type="button" onClick={() => submit(command)}>
              {command}
              <ArrowUpRight size={11} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
