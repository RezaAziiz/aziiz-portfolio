import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "id";
export type Theme = "dark" | "light";

const copy = {
  en: {
    languageName: "English",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    sidebar: {
      tagline:
        "I build thoughtful software with a focus on resilient backend architectures, reliable systems, and cohesive user experiences.",
      availability: "Available for engineering roles",
    },
    about: [
      "I operate in the space where rigorous backend architectures meet thoughtful product interaction.",
      "My focus is centered on architecting scalable distributed backends, clean API contracts, and performant data pipelines. I believe that engineering elegance doesn't live in code complexity, but in crafting systems that are observable, straightforward to maintain, and resilient under unexpected load.",
      "Over the past several years, I've designed cloud-native services using Go, TypeScript, and Python, while partnering closely with product designers to guarantee that latency limits, state synchronization, and micro-interactions elevate the end-user feel rather than hindering it.",
      "When away from the editor, I write technical deep-dives on concurrency primitives, experiment with self-hosted homelab infrastructure, and contribute to open-source developer tooling.",
    ],
    experience: {
      title: "Experience",
      items: [
        {
          role: "Software Engineer Intern",
          bullets: [
            "Spearheaded core backend development for an enterprise workflow automation product utilizing Node.js and FastAPI.",
            "Authored modular webhook dispatcher capable of reliable retries with exponential backoff and cryptographic signature validation.",
            "Engineered high-concurrency background queues using Celery and Redis to handle asynchronous document parsing pipelines.",
            "Partnered with frontend teams to implement strict TypeScript contract types via OpenAPI generator.",
          ],
        },
        {
          role: "Frontend Developer",
          bullets: [
            "Built and maintained reusable component library used across 4 internal products with Storybook documentation.",
            "Led migration from legacy class components to functional React with hooks, reducing bundle size by 18%.",
            "Collaborated with design team to implement pixel-perfect UI with WCAG 2.1 AA accessibility compliance.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      selected: "Selected Projects",
      items: [
        {
          title: "Kroma: Distributed Log Aggregator & Telemetry Daemon",
          subtitle:
            "Lightweight, memory-efficient structured log ingestion engine.",
        },
        {
          title: "Nexus: Real-time Collaborative Code Editor",
          subtitle: "Conflict-free collaborative editing with sub-100ms sync.",
        },
        {
          title: "Vanta: Zero-trust API Gateway",
          subtitle:
            "Policy-based access control with cryptographic identity verification.",
        },
      ],
    },
    contact: {
      getInTouch: "Get In Touch",
      title: "Let's build something thoughtful.",
      description:
        "Whether you are designing a high-concurrency distributed backend, architecting an end-to-end product, or looking for an engineering partner who values craft and systems design — my inbox is always open.",
      connect: "Connect on LinkedIn",
      footer: "Designed with editorial restraint. Handcrafted code.",
    },
  },
  id: {
    languageName: "Bahasa Indonesia",
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      stack: "Teknologi",
      contact: "Kontak",
    },
    sidebar: {
      tagline:
        "Saya membangun perangkat lunak yang andal, dengan fokus pada arsitektur backend tangguh, sistem tepercaya, dan pengalaman pengguna yang padu.",
      availability:
        "Terbuka untuk peluang kerja di bidang rekayasa perangkat lunak",
    },
    about: [
      "Saya bekerja di persimpangan antara arsitektur backend yang tangguh dan interaksi produk yang dirancang dengan cermat.",
      "Fokus saya adalah merancang backend terdistribusi yang skalabel, kontrak API yang jelas, dan pipeline data yang efisien. Bagi saya, keanggunan rekayasa bukan soal kompleksitas kode, melainkan sistem yang mudah dipantau, dirawat, dan tetap tangguh saat menghadapi beban tak terduga.",
      "Beberapa tahun terakhir, saya merancang layanan cloud-native dengan Go, TypeScript, dan Python, sekaligus bekerja bersama desainer produk agar batas latensi, sinkronisasi state, dan micro-interaction memperkaya pengalaman pengguna.",
      "Di luar editor, saya menulis ulasan teknis tentang concurrency, bereksperimen dengan infrastruktur homelab mandiri, dan berkontribusi pada perangkat pengembang open source.",
    ],
    experience: {
      title: "Pengalaman",
      items: [
        {
          role: "Software Engineer Intern",
          bullets: [
            "Memimpin pengembangan backend inti untuk produk otomasi alur kerja perusahaan menggunakan Node.js dan FastAPI.",
            "Membuat dispatcher webhook modular dengan retry andal, exponential backoff, dan validasi tanda tangan kriptografis.",
            "Merancang antrean latar berkonkurensi tinggi menggunakan Celery dan Redis untuk pipeline pemrosesan dokumen asinkron.",
            "Berkolaborasi dengan tim frontend untuk menerapkan kontrak tipe TypeScript yang ketat melalui OpenAPI Generator.",
          ],
        },
        {
          role: "Frontend Developer",
          bullets: [
            "Membangun dan merawat pustaka komponen reusable untuk 4 produk internal, lengkap dengan dokumentasi Storybook.",
            "Memimpin migrasi dari class component lama ke React fungsional dengan hooks, mengurangi ukuran bundle sebesar 18%.",
            "Berkolaborasi dengan tim desain untuk menghadirkan UI presisi dengan aksesibilitas WCAG 2.1 AA.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyek",
      selected: "Proyek Pilihan",
      items: [
        {
          title: "Kroma: Agregator Log Terdistribusi & Daemon Telemetri",
          subtitle:
            "Mesin ingest log terstruktur yang ringan dan hemat memori.",
        },
        {
          title: "Nexus: Editor Kode Kolaboratif Real-time",
          subtitle:
            "Kolaborasi penyuntingan tanpa konflik dengan sinkronisasi di bawah 100 ms.",
        },
        {
          title: "Vanta: API Gateway Zero-trust",
          subtitle:
            "Kontrol akses berbasis kebijakan dengan verifikasi identitas kriptografis.",
        },
      ],
    },
    contact: {
      getInTouch: "Hubungi Saya",
      title: "Mari bangun sesuatu yang bermakna.",
      description:
        "Sedang merancang backend terdistribusi berkonkurensi tinggi, membangun produk menyeluruh, atau mencari rekan engineer yang menghargai kualitas dan desain sistem? Saya siap berdiskusi.",
      connect: "Terhubung di LinkedIn",
      footer: "Dirancang dengan cermat. Ditulis dengan sepenuh hati.",
    },
  },
};

type Copy = (typeof copy)[Language];

interface Preferences {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  copy: Copy;
}

const PreferencesContext = createContext<Preferences | null>(null);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
  }, [language, theme]);

  const value = useMemo(
    () => ({ language, setLanguage, theme, setTheme, copy: copy[language] }),
    [language, theme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePreferences = () => {
  const preferences = useContext(PreferencesContext);
  if (!preferences)
    throw new Error("usePreferences must be used within PreferencesProvider");
  return preferences;
};
