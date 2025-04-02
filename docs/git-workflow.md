# Guía de Flujo de Trabajo con Git

## Índice
1. [Nomenclatura de Ramas](#nomenclatura-de-ramas)
2. [Formato de Commits](#formato-de-commits)
3. [Formato de Pull Requests](#formato-de-pull-requests)

## Nomenclatura de Ramas

Para mantener un repositorio organizado, sigue estas convenciones para nombrar tus ramas:

| Tipo de Rama | Formato               | Ejemplo                        |
|--------------|------------------------|--------------------------------|
| Feature      | `feature/nombre-feature` | `feature/login-authentication` |
| Refactor     | `refactor/nombre-refactor` | `refactor/login-component`    |

### Ejemplos:

```
feature/user-authentication
feature/payment-gateway
feature/product-search

refactor/database-queries
refactor/api-endpoints
refactor/css-styles
```

## Formato de Commits

Los mensajes de commit deben seguir el siguiente formato:

```
<tipo>: <descripción>
```

### Tipos de Commit:

| Prefijo   | Descripción                                          | Ejemplo                                |
|-----------|------------------------------------------------------|----------------------------------------|
| `feat`    | Nuevas características o funcionalidades             | `feat: add user authentication system` |
| `fix`     | Corrección de errores                                | `fix: resolve login page redirect bug` |
| `refactor`| Cambios en el código que no agregan funcionalidad ni corrigen errores | `refactor: simplify authentication logic` |
| `docs`    | Cambios en la documentación                          | `docs: update API endpoints in README` |
| `style`   | Cambios que no afectan el significado del código (espacios, formato, etc.) | `style: format code according to style guide` |
| `test`    | Agregar o corregir pruebas                           | `test: add unit tests for login component` |
| `chore`   | Cambios en el proceso de construcción o herramientas auxiliares | `chore: add .gitignore file` |

### Ejemplos de Buenos Commits:

```
feat: add shopping cart functionality
fix: resolve issue with payment processing
refactor: simplify product search algorithm
docs: update installation instructions
style: format code according to new style guide
test: add integration tests for checkout process
chore: update dependencies
```

## Formato de Pull Requests

### Título del PR

El título debe ser claro y describir brevemente los cambios:

```
Add members cards
```

### Descripción del PR

La descripción debe incluir:

- **Resumen de los cambios**

### Ejemplo de PR:

**Título:** Add members cards

**Descripción:**

```
## Cambios realizados
Implementación de las tarjetas de miembros en la página principal del sitio.
```

---

Siguiendo estas convenciones, mantendremos un historial de cambios claro y un flujo de trabajo ordenado en nuestro proyecto.