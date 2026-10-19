import type { Language } from "../contexts/PreferencesContext";

export interface LocalizedText {
  en: string;
  id: string;
}

export interface WorkDetailContent {
  heroImage: {
    src: string;
    alt: LocalizedText;
    caption: LocalizedText;
  } | null;
  overview: {
    problem: LocalizedText;
    audience: LocalizedText;
    solution: LocalizedText;
  };
  architecture: {
    introduction: LocalizedText;
    nodes: {
      title: LocalizedText;
      description: LocalizedText;
    }[];
    decisionsTitle: LocalizedText;
    decisions: LocalizedText;
    requestFlowTitle: LocalizedText;
    requestFlow: LocalizedText;
  };
  validation: {
    metrics: {
      label: LocalizedText;
      value: string;
      unit: string;
      note: LocalizedText;
    }[];
    protocolTitle: LocalizedText;
    protocol: LocalizedText;
  };
}

const text = (en: string, id: string): LocalizedText => ({ en, id });

const makePlaceholderDetail = (): WorkDetailContent => ({
  heroImage: null,
  overview: {
    problem: text(
      "Replace with the specific problem this work addressed.",
      "Ganti dengan masalah spesifik yang diselesaikan.",
    ),
    audience: text(
      "Replace with the users, team, or system this work served.",
      "Ganti dengan pengguna, tim, atau sistem yang dilayani.",
    ),
    solution: text(
      "Replace with a concise summary of the approach and your contribution.",
      "Ganti dengan ringkasan pendek tentang pendekatan dan kontribusi Anda.",
    ),
  },
  architecture: {
    introduction: text(
      "Replace with a short explanation of the system boundary and the main design constraints.",
      "Ganti dengan penjelasan singkat tentang batas sistem dan kendala desain utama.",
    ),
    nodes: [
      {
        title: text("Source system", "Sistem sumber"),
        description: text(
          "Replace with the input or event source.",
          "Ganti dengan sumber input atau event.",
        ),
      },
      {
        title: text("Processing service", "Layanan pemrosesan"),
        description: text(
          "Replace with the core service and its responsibilities.",
          "Ganti dengan layanan inti dan tanggung jawabnya.",
        ),
      },
      {
        title: text("Output / storage", "Output / penyimpanan"),
        description: text(
          "Replace with downstream consumers or persistence.",
          "Ganti dengan konsumen lanjutan atau penyimpanan.",
        ),
      },
    ],
    decisionsTitle: text("Architectural decisions", "Keputusan arsitektur"),
    decisions: text(
      "Replace with the trade-offs considered, the decision made, and why it fit the constraints.",
      "Ganti dengan trade-off yang dipertimbangkan, keputusan yang diambil, dan alasannya.",
    ),
    requestFlowTitle: text("Request flow", "Alur request"),
    requestFlow: text(
      "Replace with the request or event path, including relevant failure handling.",
      "Ganti dengan jalur request atau event, termasuk penanganan kegagalan yang relevan.",
    ),
  },
  validation: {
    metrics: [
      {
        label: text("Scale", "Skala"),
        value: "—",
        unit: "",
        note: text("Add a verified metric.", "Tambahkan metrik terverifikasi."),
      },
      {
        label: text("Latency", "Latensi"),
        value: "—",
        unit: "",
        note: text("Add a verified metric.", "Tambahkan metrik terverifikasi."),
      },
      {
        label: text("Availability", "Ketersediaan"),
        value: "—",
        unit: "",
        note: text("Add a verified metric.", "Tambahkan metrik terverifikasi."),
      },
      {
        label: text("Efficiency", "Efisiensi"),
        value: "—",
        unit: "",
        note: text("Add a verified metric.", "Tambahkan metrik terverifikasi."),
      },
    ],
    protocolTitle: text("Validation protocol", "Protokol validasi"),
    protocol: text(
      "Replace with the tests, test conditions, and evidence used to validate the result.",
      "Ganti dengan pengujian, kondisi uji, dan bukti yang digunakan untuk memvalidasi hasil.",
    ),
  },
});

export const workDetails: Record<string, WorkDetailContent> = {
  "project:proj-1": makePlaceholderDetail(),
  "project:proj-2": makePlaceholderDetail(),
  "project:proj-3": makePlaceholderDetail(),
  "experience:exp-1": makePlaceholderDetail(),
  "experience:exp-2": makePlaceholderDetail(),
};

export const localized = (value: LocalizedText, language: Language) =>
  value[language];
