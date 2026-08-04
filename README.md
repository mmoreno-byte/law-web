# Despacho Jurídico - Web Demo

Sitio web profesional para un despacho de abogacía especializado en derecho civil, laboral y mercantil.

## 🎯 Características

- **Diseño Responsivo**: Adaptado a todos los dispositivos
- **Interfaz Profesional**: Colores y tipografía que evocan abogacía y confianza
- **Secciones Completas**:
  - Hero con propuesta de valor
  - Áreas de práctica
  - Proceso de trabajo
  - Sobre nosotros
  - FAQ (Preguntas frecuentes)
  - Formulario de contacto
  - Footer con información de contacto

- **Animaciones Suaves**: Reveal animations al hacer scroll
- **Formulario de Contacto**: Integrado con EmailJS
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnología

- **React 19** - UI Library
- **Vite** - Build tool
- **EmailJS** - Email service
- **React Icons** - Iconografía
- **CSS3** - Estilos personalizados

## 📋 Configuración

### Clonar e instalar

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build

```bash
npm run build
```

## ⚙️ Configuración de EmailJS

Para que el formulario de contacto funcione:

1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta y obtén tu **Public Key**
3. Configura un servicio de email (Gmail, Outlook, etc.)
4. Reemplaza en `src/components/Contact.jsx`:
   - `YOUR_PUBLIC_KEY` - Tu clave pública de EmailJS
   - `YOUR_SERVICE_ID` - Tu ID de servicio
   - `YOUR_TEMPLATE_ID` - Tu ID de plantilla

## 📝 Personalización

### Colores

Los colores están definidos en `src/styles/global.css`:

```css
:root {
  --primary: #1a3a52;        /* Azul marino */
  --primary-dark: #0d1f2d;   /* Azul oscuro */
  --accent: #d4af37;         /* Dorado */
  --bg-light: #f5f5f5;       /* Fondo claro */
  --text-dark: #333333;      /* Texto oscuro */
}
```

### Contenido

- **Datos del Despacho**: `src/components/Contact.jsx`
- **Servicios**: `src/components/Practices.jsx`
- **Áreas de Práctica**: `src/components/Practices.jsx`
- **Preguntas Frecuentes**: `src/components/FAQ.jsx`

## 🎨 Paleta de Colores

| Color | Valor | Uso |
|-------|-------|-----|
| Azul Marino | `#1a3a52` | Primario, headers |
| Azul Oscuro | `#0d1f2d` | Fondo, énfasis |
| Dorado | `#d4af37` | Acentos, botones |
| Gris Claro | `#f5f5f5` | Fondos |
| Gris Oscuro | `#333333` | Texto |

## 📱 Responsivo

- Desktop: Versión completa
- Tablet (768px): Ajuste de layout
- Mobile (480px): Versión comprimida

## 📄 Licencia

Demo project - Uso privado
