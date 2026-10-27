import "./globals.css";

export const metadata = {
  title: "Тайна Вселенной — новогоднее шоу Союзмультфильм",
  description: "Большое новогоднее шоу для всей семьи. Впервые любимые герои встречаются на одной сцене."
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
