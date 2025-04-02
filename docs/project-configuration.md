# Configuración del Proyecto

## Variables de Entorno

Para el correcto funcionamiento del proyecto, es necesario configurar variables de entorno en un archivo `.env.local` en la raíz del proyecto.

### Configuración del archivo .env.local

1. Crea un archivo llamado `.env.local` en la raíz del proyecto
2. Añade la siguiente variable:

```
PUBLIC_GOOGLE_SHEET_URL=https://url_del_google_sheet/
```

> **Importante**: Se debe solicitar la URL del Google Sheet al propietario del repositorio. No se debe compartir esta URL públicamente.

## Instalación de Dependencias

Todas las dependencias del proyecto deben instalarse utilizando la flag `-E` (o su equivalente `--save-exact`).

### ¿Por qué usar la flag -E?

La flag `-E` asegura que se instale la versión exacta de una dependencia, sin el prefijo `^` que pnpm añade por defecto. Esto garantiza:

1. **Consistencia del entorno**: Todos los desarrolladores trabajan con las mismas versiones exactas
2. **Reproducibilidad**: Evita problemas inesperados por actualizaciones automáticas de dependencias
3. **Control de versiones**: Las actualizaciones de dependencias se realizan de forma explícita y controlada

### Ejemplos de instalación correcta

```bash
# Instalación correcta (con flag -E)
pnpm install -E react

# Equivalente a
pnpm install --save-exact react

# Para dependencias de desarrollo
pnpm install -E -D typescript
```
---

Siguiendo estas prácticas, se mantendrá un entorno de desarrollo consistente y se evitará problemas relacionados con diferentes versiones de dependencias entre los miembros del equipo.