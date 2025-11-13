// src/types/web-vitals.d.ts

// Declara o módulo 'web-vitals' com as funções que você precisa.
// Isso elimina os erros TS2339.

declare module 'web-vitals' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Metric {}
  export type ReportHandler = (metric: Metric) => void;

  export function getCLS(onReport: ReportHandler): void;
  export function getFID(onReport: ReportHandler): void;
  export function getLCP(onReport: ReportHandler): void;
  export function getFCP(onReport: ReportHandler): void;
  export function getTTFB(onReport: ReportHandler): void;

  // Se você ainda precisar da sintaxe antiga (import().then((webVitals) => webVitals.getCLS))
  // O módulo inteiro deve ser exportado com essas funções como propriedades.
  const webVitals: {
    getCLS: typeof getCLS;
    getFID: typeof getFID;
    getLCP: typeof getLCP;
    getFCP: typeof getFCP;
    getTTFB: typeof getTTFB;
  };
  export default webVitals;
}
