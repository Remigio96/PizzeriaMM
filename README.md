# 🍕 Pizzería Mamma Mia — Hito 1 (React)

<img width="2614" height="1678" alt="picza" src="https://github.com/user-attachments/assets/42311208-2b10-4169-9d00-bab0faf6ef62" />

---

## 🍕 Stack

* Vite + React
* React‑Bootstrap (componentes) + Bootstrap
* JSX, props por componentes, renderizado condicional

---

## 🍕 Objetivo del Hito

Construir una SPA mínima con los componentes: **Navbar**, **Home**, **Header** (dentro de Home), **CardPizza** (reutilizable) y **Footer**. Mostrar 3 pizzas con props, manejar visibilidad de botones del menú según `token` y presentar un total formateado.

---

## 🗂️ Estructura

```
├───public
│       favicon.ico
│
└───src
    │   App.css
    │   App.jsx
    │   index.css
    │   main.jsx
    │
    ├───assets
    │       header.jpg
    │
    └───components
            CardPizza.jsx
            Footer.jsx
            Header.jsx
            Home.jsx
            Navbar.jsx
```

---

## 🍕 Detalles de implementación

### Navbar.jsx

* Define **dentro del componente**:

  * `const total = 25000` (formateado a CLP con `toLocaleString("es-CL")`).
  * `const token = false` *(`useState(false)` para simular login)*.
* **Home** y **Total** se muestran **siempre**.
* Si `token === true` → **Profile** y **Logout**.
* Si `token === false` → **Login** y **Register**.

### 🍕 Header.jsx

* Título y descripción.
* **Imagen de fondo**

### 🍕 CardPizza.jsx

* Componente **reutilizable** que recibe por **props**: `name`, `price`, `ingredients`, `img`.
* Botones **“Ver más”** y **“Añadir”** sin funcionalidad.

### 🍕 Home.jsx

* Importa y renderiza **Header**.
* Renderiza **3** `CardPizza` con los **props exactos** solicitados en el enunciado: **Napolitana**, **Española**, **Pepperoni**.

### 🍕 Footer.jsx

* Texto **exacto**: `© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados`.

---

## 🏞️Live Preview 

<img width="1919" height="816" alt="image" src="https://github.com/user-attachments/assets/7f0f360f-1161-49f0-819a-34df1feb54a0" />

https://remigio96.github.io/PizzeriaMM/
