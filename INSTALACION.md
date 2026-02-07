# 🎯 GUÍA DE INSTALACIÓN - PORTFOLIO NEXT.JS

## ⚡ Pasos para Configurar tu Nuevo Portfolio

### 1️⃣ CREAR NUEVO REPOSITORIO EN GITHUB

```bash
# En GitHub, crea un nuevo repositorio llamado "portfolio-nextjs"
# NO inicialices con README (ya tenemos uno)
```

### 2️⃣ COPIAR ARCHIVOS A TU PROYECTO

1. Crea una carpeta nueva en tu computadora:
```bash
mkdir portfolio-nextjs
cd portfolio-nextjs
```

2. Copia TODOS los archivos que te he creado a esta carpeta

### 3️⃣ INICIALIZAR GIT Y SUBIR A GITHUB

```bash
# Inicializar git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "🚀 Initial commit - Modern portfolio with Next.js 15"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/AndyV01/portfolio-nextjs.git

# Subir los archivos
git push -u origin main
```

### 4️⃣ INSTALAR DEPENDENCIAS

```bash
# Con npm
npm install

# O con yarn
yarn install
```

### 5️⃣ EJECUTAR EN DESARROLLO

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador 🎉

---

## 🎨 PERSONALIZACIÓN REQUERIDA

### ✅ Información Personal

Busca y reemplaza en TODOS los archivos:

- **Email**: `tu-email@example.com` → tu email real
- **LinkedIn**: `https://linkedin.com/in/tu-perfil` → tu perfil de LinkedIn
- **GitHub**: Ya está correcto (`@AndyV01`)
- **Ubicación**: Ya está como "Uruguay"

### 📝 Archivos a Editar:

1. **`src/components/Hero.tsx`**
   - Línea 38: Cambiar email
   - Línea 52: Cambiar LinkedIn URL
   - Puedes reemplazar el círculo con iniciales "AV" por una foto tuya

2. **`src/components/About.tsx`**
   - Personaliza la descripción sobre ti (líneas 51-63)

3. **`src/components/Projects.tsx`**
   - Actualiza la información de tus proyectos
   - Agrega screenshots reales en `/public/projects/`

4. **`src/components/Contact.tsx`**
   - Línea 49 y 51: Actualizar email
   - Opcionalmente: Integrar con EmailJS o Formspree

5. **`src/components/Footer.tsx`**
   - Línea 13: Actualizar LinkedIn URL
   - Línea 18: Actualizar email

6. **`src/app/layout.tsx`**
   - Verificar que los meta tags sean correctos

### 📸 AGREGAR IMÁGENES

Crea la carpeta `/public/projects/` y agrega imágenes de tus proyectos:
- ecommerce.jpg
- weather.jpg
- store.jpg
- gallery.jpg

O usa las que ya tengas de tu portafolio actual.

---

## 🚀 DEPLOY EN VERCEL (GRATIS)

### Opción 1: Desde la Web

1. Ve a https://vercel.com
2. Haz login con GitHub
3. Click en "Add New Project"
4. Selecciona el repositorio `portfolio-nextjs`
5. Vercel detectará Next.js automáticamente
6. Click en "Deploy"
7. ¡Listo! Tu sitio estará en `https://tu-portfolio.vercel.app`

### Opción 2: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Seguir las instrucciones
```

---

## 🔧 CONFIGURACIÓN DE FORMULARIO DE CONTACTO

### Opción A: EmailJS (Recomendado - Gratis)

1. Regístrate en https://emailjs.com
2. Crea un servicio de email
3. Crea una plantilla
4. Instala EmailJS:
```bash
npm install @emailjs/browser
```

5. Actualiza `src/components/Contact.tsx` con tu configuración

### Opción B: Formspree

1. Regístrate en https://formspree.io
2. Crea un formulario
3. Actualiza la action del form con tu endpoint

---

## 📊 VERIFICAR PERFORMANCE

Antes de hacer deploy final:

```bash
# Build de producción
npm run build

# Iniciar servidor de producción localmente
npm start
```

Luego prueba en:
- Chrome DevTools > Lighthouse
- https://pagespeed.web.dev/

Objetivo: 90+ en todas las métricas

---

## ✅ CHECKLIST FINAL

Antes de compartir tu portfolio:

- [ ] Información personal actualizada
- [ ] Email y links sociales correctos
- [ ] Proyectos con descripciones actualizadas
- [ ] Imágenes de proyectos agregadas
- [ ] CV actualizado en `/public/`
- [ ] Formulario de contacto funcional
- [ ] Probado en móvil y desktop
- [ ] Dark mode funcionando correctamente
- [ ] Sin errores en consola
- [ ] Performance > 90 en Lighthouse
- [ ] Deploy en Vercel exitoso

---

## 🆘 PROBLEMAS COMUNES

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript
```bash
rm -rf .next
npm run dev
```

### Imágenes no cargan
- Verifica que estén en `/public/`
- Usa rutas absolutas: `/imagen.jpg`

---

## 📞 NECESITAS AYUDA?

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa la terminal donde corre `npm run dev`
3. Busca el error en Google
4. Pregúntame específicamente qué error tienes

---

## 🎉 ¡FELICITACIONES!

Ahora tienes un portfolio profesional y moderno que:
- ✅ Demuestra conocimientos actuales
- ✅ Es rápido y responsive
- ✅ Tiene dark mode
- ✅ Está optimizado para SEO
- ✅ Se ve profesional

¡Buena suerte en tu búsqueda laboral! 🚀
