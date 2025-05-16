# PokeApp

Una app web en React que busca info básica de cualquier Pokémon usando la [PokeAPI](https://pokeapi.co/). Solo escribes el nombre y te muestra imagen, tipos, habilidades, estadísticas, estatura, peso y algunos movimientos.

## Cómo correr el proyecto localmente

Clona el repo y levanta la app con npm:

```bash
git clone https://github.com/tu-usuario/pokeapp.git
cd pokeapp
npm install
npm run dev

#Duración del proyecto
#  7 horas.

#Estructura del proyecto

# src/
# ├── components/
# │   ├── Loader.jsx          # Cubre pantalla mientras se carga info
# │   ├── PokemonCard.jsx     # Tarjeta con la info del Pokémon
# │   └── SearchBar.jsx       # Input y botón de búsqueda
# ├── assets/                 # Imágenes, íconos, fuentes personalizadas
# ├── App.jsx                 # Componente principal
# ├── main.jsx                # Punto de entrada con ReactDOM
# ├── App.css                 # Estilos generales
# └── index.css               # Variables, reset y estilos base

#Decisiones Técnicas

# Usé React + Vite porque es rápido y simple para proyectos modernos.
# Incorporé Bootstrap 5 para layout y utilidades, pero controlé la estética con CSS artesanal.
# Definí variables CSS personalizadas y cargué fuentes custom (Fredoka y PokemonSolid).
# Implementé carga automática con useEffect para recordar el último Pokémon buscado (localStorage).
# Validación sencilla para que la búsqueda solo acepte letras minúsculas, punto o guión.
# Loader tipo modal con fondo oscuro y GIF centrado para mejor experiencia mientras carga.
# Diseño responsivo con media queries bien afinadas usando decimales precisos para evitar saltos bruscos.


# Extras implementados

# Validación de inputs para que solo acepte letras minúsculas, punto o guión.
# Autoenfoque a último Pokémon buscado (guardado en localStorage).
# Info extra como estatura (cm), peso (kg), y una tabla con las estadísticas base del Pokémon.
# Ejemplos de movimientos del Pokémon (primeros 5).
# Estética cuidada y coherente con el mundo Pokémon (colores, fuentes, fondo, etc.).


#Capturas de pantalla

### Pantalla principal con búsqueda

![Pantalla principal](./assets/screenshots/pantalla-principal.png)

---

### Resultado con Pokémon cargado

![Detalle de Pokémon](./assets/screenshots/pantalla-principal-busqueda.png)

---

### Estado de carga (loader)

![Cargando](./assets/screenshots/pantalla-loader.png)

---

### Responsive (tablet)

![Responsive](./assets/screenshots/responsive-tablet.png)

---

### Responsive (mobile)

![Responsive](./assets/screenshots/responsive-mobile.png)