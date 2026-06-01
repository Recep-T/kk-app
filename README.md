# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# kk-app


### 
Aslında matematiksel bir numara kullandım:

Sorun: Ayın son günü (örn. Mayıs 31) bir sonraki aya "sızıyor" — o gün artık yeni bir cüz başlıyor ama liste hâlâ aynı ayda kalıyor.

Çözüm: calculateOffset içinde şunu yaptım:


const nextDay = new Date(current);
nextDay.setDate(nextDay.getDate() + 1);
const isLastDay = nextDay.getDate() === 1;  // yarın 1. mi? o zaman bugün son gün
const ref = isLastDay ? nextDay : current;  // son günse bir sonraki ayı baz al
Yani ayın son günündeyse, liste rotasyonunu hesaplarken o günü değil ertesi günü (yani bir sonraki ayın 1'ini) baz alıyorum. Böylece:

Mayıs 31 → sistem "aslında Haziran gibi davran" diyor → Yusuf E = 1. sıra
Haziran 1 → zaten Haziran → Yusuf E = 1. sıra (aynı devam ediyor)
Haziran 30 → sistem "aslında Temmuz gibi davran" diyor → Ömer A = 1. sıra
Cüz hesabı (calculateCuz) ise gün bazlı kalmaya devam ediyor, sadece liste sırası bu mantıkla 